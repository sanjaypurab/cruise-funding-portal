import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Download, FileText, KeyRound, Loader2, LogOut, RefreshCw, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { downloadLoanPdf } from '@/lib/businessLoanPdf';

type Application = Record<string, unknown> & { id: string; application_number: string; status: string; owner_name: string; company_name?: string | null; requested_financing_amount: number; created_at: string; internal_notes?: string | null };
type Document = { id: string; original_name: string; storage_path: string; file_size: number; mime_type: string };
const statuses = ['submitted', 'under_review', 'documents_required', 'processing', 'approved', 'declined', 'withdrawn', 'completed'];
const statusLabel = (status: string) => status.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const money = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount || 0);

const AdminApplications: React.FC = () => {
  const [sessionReady, setSessionReady] = useState(false);
  const [session, setSession] = useState<{ user: { email?: string | null } } | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [applications, setApplications] = useState<Application[]>([]);
  const [selected, setSelected] = useState<Application | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const { toast } = useToast();

  const call = useCallback(async (body: Record<string, unknown>) => {
    const { data, error } = await supabase.functions.invoke('manage-business-loans', { body });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data;
  }, []);

  const loadApplications = useCallback(async () => {
    setLoading(true);
    try {
      const result = await call({ action: 'list', search, status: filter === 'all' ? '' : filter });
      setApplications(result.applications ?? []);
    } catch (error) {
      toast({ title: 'Workspace unavailable', description: error instanceof Error ? error.message : 'Please sign in with an authorized staff account.', variant: 'destructive' });
    } finally { setLoading(false); }
  }, [call, filter, search, toast]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setSessionReady(true); });
  }, []);

  useEffect(() => { if (session) void loadApplications(); }, [loadApplications, session]);

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault(); setSigningIn(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setSigningIn(false);
    if (error) { toast({ title: 'Sign-in failed', description: 'Check your email and password, then try again.', variant: 'destructive' }); return; }
    setSession(data.session);
    setPassword('');
  };

  const openApplication = async (application: Application) => {
    setSelected(application); setNotes(application.internal_notes ?? '');
    try { const result = await call({ action: 'detail', applicationId: application.id }); setSelected(result.application); setDocuments(result.documents ?? []); setNotes(result.application.internal_notes ?? ''); }
    catch (error) { toast({ title: 'Could not open application', description: error instanceof Error ? error.message : 'Try again.', variant: 'destructive' }); }
  };

  const updateApplication = async (status: string) => {
    if (!selected) return;
    try { const result = await call({ action: 'update', applicationId: selected.id, status, internalNotes: notes }); setSelected(result.application); setApplications((current) => current.map((item) => item.id === selected.id ? result.application : item)); toast({ title: 'Application updated', description: `${result.application.application_number} is now ${statusLabel(status)}.` }); }
    catch (error) { toast({ title: 'Update failed', description: error instanceof Error ? error.message : 'Try again.', variant: 'destructive' }); }
  };

  const openPrivateFile = async (path: string) => {
    if (!selected) return;
    try { const result = await call({ action: 'file-url', applicationId: selected.id, path }); window.open(result.url, '_blank', 'noopener,noreferrer'); }
    catch (error) { toast({ title: 'File unavailable', description: error instanceof Error ? error.message : 'The secure link could not be created.', variant: 'destructive' }); }
  };

  const filtered = useMemo(() => applications, [applications]);
  if (!sessionReady) return <div className="mx-auto max-w-6xl px-4 py-20 text-center text-muted-foreground">Loading secure workspace…</div>;
  if (!session) return <div className="mx-auto max-w-md px-4 py-16 sm:py-24"><Card><CardHeader><div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><KeyRound className="h-5 w-5" /></div><CardTitle>Staff sign in</CardTitle><CardDescription>This workspace is restricted to authorized Cruise Finance Group staff.</CardDescription></CardHeader><CardContent><form className="space-y-4" onSubmit={signIn}><Input type="email" placeholder="Work email" value={email} onChange={(event) => setEmail(event.target.value)} required /><Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required /><Button className="w-full" disabled={signingIn}>{signingIn ? <Loader2 className="animate-spin" /> : <ShieldCheck />} Sign in securely</Button></form></CardContent></Card></div>;

  return <div className="bg-muted/30 px-4 py-10 sm:px-6 lg:py-14"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Authorized workspace</p><h1 className="text-3xl font-semibold md:text-4xl">Business applications</h1><p className="mt-2 text-sm text-muted-foreground">Review submissions, update workflow status, and access private files.</p></div><Button variant="outline" onClick={() => supabase.auth.signOut()}><LogOut /> Sign out</Button></div><div className="mb-6 flex flex-col gap-3 md:flex-row"><div className="relative flex-1"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search ID, owner, company, or email" value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') void loadApplications(); }} /></div><select className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={filter} onChange={(event) => { setFilter(event.target.value); }}><option value="all">All statuses</option>{statuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}</select><Button variant="outline" onClick={() => void loadApplications()} disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : <RefreshCw />} Refresh</Button></div><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]"><Card><CardContent className="p-0"><div className="overflow-auto"><table className="w-full text-sm"><thead className="border-b border-border bg-muted/40"><tr><th className="px-4 py-3 text-left font-medium text-muted-foreground">Application</th><th className="px-4 py-3 text-left font-medium text-muted-foreground">Applicant</th><th className="px-4 py-3 text-left font-medium text-muted-foreground">Request</th><th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th></tr></thead><tbody>{filtered.map((application) => <tr key={application.id} className="cursor-pointer border-b border-border transition-colors hover:bg-muted/40" onClick={() => void openApplication(application)}><td className="px-4 py-4"><p className="font-mono font-medium">{application.application_number}</p><p className="mt-1 text-xs text-muted-foreground">{new Date(application.created_at).toLocaleDateString()}</p></td><td className="px-4 py-4"><p className="font-medium">{application.owner_name}</p><p className="mt-1 text-xs text-muted-foreground">{application.company_name || 'Business not provided'}</p></td><td className="px-4 py-4 font-medium">{money(application.requested_financing_amount)}</td><td className="px-4 py-4"><Badge variant={application.status === 'approved' ? 'default' : 'outline'}>{statusLabel(application.status)}</Badge></td></tr>)}</tbody></table>{!filtered.length && <div className="p-10 text-center text-sm text-muted-foreground">No applications match this view.</div>}</div></CardContent></Card><Card className="h-fit"><CardHeader><CardTitle className="text-lg">Application details</CardTitle><CardDescription>{selected ? selected.application_number : 'Select an application to review'}</CardDescription></CardHeader><CardContent>{selected ? <div className="space-y-5"><div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-xs text-muted-foreground">Owner</p><p className="mt-1 font-medium">{selected.owner_name}</p></div><div><p className="text-xs text-muted-foreground">Company</p><p className="mt-1 font-medium">{selected.company_name || '—'}</p></div><div><p className="text-xs text-muted-foreground">Email</p><p className="mt-1 break-all">{String(selected.business_email || '—')}</p></div><div><p className="text-xs text-muted-foreground">Requested</p><p className="mt-1 font-medium">{money(selected.requested_financing_amount)}</p></div></div><div className="space-y-2"><p className="text-sm font-medium">Workflow status</p><select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={selected.status} onChange={(event) => setSelected({ ...selected, status: event.target.value })}>{statuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}</select></div><div className="space-y-2"><p className="text-sm font-medium">Internal notes</p><Textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Add a private review note" rows={4} /></div><Button className="w-full" onClick={() => void updateApplication(selected.status)}>Save review update</Button><div className="space-y-2 border-t border-border pt-4"><p className="text-sm font-medium">Private documents</p>{documents.length ? documents.map((document) => <Button key={document.id} variant="outline" className="w-full justify-start" onClick={() => void openPrivateFile(document.storage_path)}><FileText /> <span className="truncate">{document.original_name}</span><Download className="ml-auto" /></Button>) : <p className="text-sm text-muted-foreground">No supporting documents attached.</p>}<Button variant="outline" className="w-full" onClick={() => downloadLoanPdf(selected, `${selected.application_number}-review.pdf`)}><Download /> Download review PDF</Button></div></div> : <p className="text-sm leading-6 text-muted-foreground">Choose a row to see applicant details, notes, documents, and review actions.</p>}</CardContent></Card></div></div></div>;
};

export default AdminApplications;