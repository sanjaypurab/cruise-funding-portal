# Business Loan Application Module — Completion Plan

## Outcome
Complete the dedicated `/business-loan-application` workflow without changing unrelated pages or the existing `/application` form.

## User-facing work
- Build a five-step Applicant, Business, Financial, Financing, and Review & Sign wizard.
- Preserve values across navigation, calculate years in business, reveal conditional fields, and validate required inputs inline.
- Support optional multi-file uploads with type, size, progress, and removal states.
- Show a review summary with section edit actions, privacy consent, draft PDF preview, and real pointer/touch signature capture.
- Submit to the secure backend and show application ID, status, and protected PDF access on success.
- Add an authorized applications workspace with search, filters, status changes, notes, and secure document/PDF access.

## Secure data flow
- Complete the applications schema, explicit grants, RLS, and private storage policies.
- Validate and persist submissions server-side, generate/store the signed PDF privately, and send minimal confirmation email.
- Keep sensitive files out of public URLs and return signed URLs only after authorization.
- Reject passwords, PINs, OTPs, card numbers, and online-banking credentials.

## Integration and verification
- Add only the dedicated route and supporting modules.
- Reuse existing design tokens and UI primitives.
- Verify the wizard and existing routes at desktop and mobile-sized viewports, including validation, signature, submission states, and admin protection.
