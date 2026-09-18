# Business Loan Application & E-Signature Module

## Outcome
Add a dedicated `/business-loan-application` wizard without changing unrelated pages, navigation, or existing application behavior.

## User-facing work
- Build a five-step responsive flow: Applicant, Business, Financial, Financing, Review & Sign.
- Preserve entered values while moving backward and forward, calculate years in business, conditionally reveal partnership/financing/collateral fields, and validate required inputs with inline messages.
- Add private, optional multi-file uploads with file type/size checks and visible file details.
- Add a review screen with section edit actions, privacy notice, confirmation checkbox, draft PDF preview, and a real touch/mouse/stylus signature canvas.
- Add a success state with a unique application ID, status, and secure PDF access action.

## Secure data flow
- Add a database-backed applications record with explicit grants and RLS, plus private storage paths for supporting files and generated PDFs.
- Add an authenticated server function to validate submissions, assign the application number, persist the signed application, generate the final PDF, store it privately, and send a minimal confirmation email.
- Keep sensitive documents out of public URLs; return a time-limited signed URL only after authorized access.
- Add server-side validation and reject passwords, PINs, OTPs, card numbers, and other prohibited banking credentials.

## Admin
- Add a protected `/admin/applications` view for authorized roles with search, status filtering, status updates, notes, PDF access, and document access.

## Integration and verification
- Add only the new route and supporting modules; leave existing routes/pages intact.
- Reuse the existing design tokens and UI primitives.
- Verify existing routes still load, the wizard works on desktop/mobile-sized viewports, and submission errors are surfaced clearly.
