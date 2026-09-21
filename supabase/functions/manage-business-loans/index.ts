import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const db = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

const statuses = new Set([
  "draft",
  "submitted",
  "under_review",
  "documents_required",
  "processing",
  "approved",
  "declined",
  "withdrawn",
  "completed",
]);

function response(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function staffUser(req: Request) {
  const header = req.headers.get("Authorization");
  const token = header?.replace(/^Bearer\s+/i, "");
  if (!token) return null;
  const { data, error } = await db.auth.getUser(token);
  if (error || !data.user) return null;

  const { data: role } = await db
    .from("user_roles")
    .select("role")
    .eq("user_id", data.user.id)
    .in("role", ["admin", "moderator"])
    .maybeSingle();

  return role ? data.user : null;
}

const listFields = "id, application_number, status, owner_name, company_name, business_email, mobile, requested_financing_amount, financing_purpose, desired_financing_term, created_at, updated_at, internal_notes, signed_at, pdf_url";

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return response({ error: "Method not allowed" }, 405);

  try {
    const user = await staffUser(req);
    if (!user) return response({ error: "Authorized staff access is required." }, 403);

    const body = await req.json().catch(() => ({}));
    const action = typeof body.action === "string" ? body.action : "list";

    if (action === "list") {
      const search = typeof body.search === "string" ? body.search.trim().slice(0, 120) : "";
      const status = typeof body.status === "string" && statuses.has(body.status) ? body.status : "";
      let query = db.from("applications").select(listFields).order("created_at", { ascending: false }).limit(200);
      if (status) query = query.eq("status", status);
      if (search) query = query.or(`application_number.ilike.%${search}%,owner_name.ilike.%${search}%,company_name.ilike.%${search}%,business_email.ilike.%${search}%`);
      const { data, error } = await query;
      if (error) throw error;
      return response({ applications: data ?? [] });
    }

    const applicationId = typeof body.applicationId === "string" ? body.applicationId : "";
    if (!applicationId) return response({ error: "An application ID is required." }, 400);

    if (action === "detail") {
      const { data: application, error } = await db.from("applications").select("*").eq("id", applicationId).maybeSingle();
      if (error) throw error;
      if (!application) return response({ error: "Application not found." }, 404);
      const { data: documents, error: documentsError } = await db.from("application_documents").select("id, original_name, storage_path, mime_type, file_size, category, created_at").eq("application_id", applicationId).order("created_at", { ascending: false });
      if (documentsError) throw documentsError;
      return response({ application, documents: documents ?? [] });
    }

    if (action === "update") {
      const nextStatus = typeof body.status === "string" ? body.status : "";
      const notes = typeof body.internalNotes === "string" ? body.internalNotes.trim().slice(0, 5000) : undefined;
      if (!statuses.has(nextStatus)) return response({ error: "That application status is not valid." }, 400);
      const update: Record<string, string> = { status: nextStatus };
      if (notes !== undefined) update.internal_notes = notes;
      const { data: application, error } = await db.from("applications").update(update).eq("id", applicationId).select(listFields).single();
      if (error) throw error;
      await db.from("application_audit_log").insert({ application_id: applicationId, action: "staff_update", actor_user_id: user.id, metadata: { status: nextStatus, notes_updated: notes !== undefined } });
      return response({ application });
    }

    if (action === "file-url") {
      const path = typeof body.path === "string" ? body.path.slice(0, 500) : "";
      if (!path) return response({ error: "A file path is required." }, 400);
      const [{ data: application, error: applicationError }, { data: document, error: documentError }] = await Promise.all([
        db.from("applications").select("id, signature_url, pdf_url").eq("id", applicationId).maybeSingle(),
        db.from("application_documents").select("storage_path").eq("application_id", applicationId).eq("storage_path", path).maybeSingle(),
      ]);
      if (applicationError) throw applicationError;
      if (documentError) throw documentError;
      const isApplicationFile = document?.storage_path === path || application?.signature_url === path || application?.pdf_url === path;
      if (!isApplicationFile) return response({ error: "That file is not attached to this application." }, 403);
      const { data: signed, error: signedError } = await db.storage.from("loan-applications").createSignedUrl(path, 300);
      if (signedError) throw signedError;
      return response({ url: signed.signedUrl });
    }

    return response({ error: "Unknown action." }, 400);
  } catch (error) {
    console.error("Business loan management failed", error);
    return response({ error: "The staff workspace could not complete that request." }, 500);
  }
});