# Finance Loan Application Starter

A mobile-friendly, transparent loan-enquiry website template with a small Node.js static server. This is a starter/demo, not a lender website and not an official site for any financial brand.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm start
```

Then open `http://localhost:3000`.

## Deploy on Render

1. Upload this project to a repository you control on GitHub.
2. In Render, create a **Web Service** connected to that repository.
3. Choose **Node** as the runtime.
4. Build command: `npm install`
5. Start command: `npm start`
6. Deploy. Render will provide a temporary `onrender.com` URL.
7. To add a custom domain, open the service's **Settings → Custom Domains**, add your domain, then configure DNS exactly as Render instructs.

## Before publishing

- Replace every instance of `Your Finance Brand` with your own business's authorized name.
- Use only logos and branding you own or have permission to use.
- Add real registered-business contact details, terms, privacy notice, grievance contact and legally required disclosures.
- The form is demo-only and does not transmit or store data. Do not claim that an application was received.
- Before collecting real applications, implement a secure backend, access controls, encryption where appropriate, retention/deletion rules and a privacy notice.
- Do not collect Aadhaar/PAN, bank credentials, OTPs or sensitive documents through this demo.
- Do not claim guaranteed approval or request an advance fee as a condition of approval.
- Verify applicable lending, consumer-protection, privacy and financial-services requirements with qualified counsel and the actual regulated lender.

## Main files

- `server.js`: Node.js static file server suitable for a basic Render Web Service.
- `public/index.html`: page content.
- `public/styles.css`: responsive styling.
- `public/app.js`: demo form behaviour.
