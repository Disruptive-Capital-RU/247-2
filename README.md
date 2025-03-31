# 24/7 Concierge – Premium Digital Concierge for High-Net-Worth Travelers

24/7 Concierge is a luxury digital assistant service designed for affluent visitors to Moscow, particularly catering to discerning clientele from the Middle East. Built with speed, trust, and seamless experience at its core, the platform offers a mobile-first, elegant interface backed by a powerful real-time service infrastructure.

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a .env.local file with the following variables:

```
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
CLOUDPAYMENTS_PUBLIC_ID=your_cloudpayments_public_id
```

---

## ✨ Core Proposition

**Request and Relax** – Each user is paired with a personal Executive Assistant who handles any request: bookings, logistics, experiences, and more. Clients interact via their preferred channel (WhatsApp, Telegram, or calls), and everything is managed end-to-end.

---

## 🔐 Authentication (Powered by Clerk)

- Secure sign-up/login via phone, email, or social auth.
- SMS-first login flow optimized for simplicity.
- Clerk metadata synced with Convex for assistant assignment and user profiling.

---

## 🧑‍💼 Executive Assistant System

- One-on-one client-assistant matching upon registration.
- Real-time request handling via chat-based interface.
- Multi-channel communication (Telegram, WhatsApp, voice).
- All interactions are logged and tied to user identity via Convex.

---

## 💬 Service Request Flow

1. **Client submits request** – structured or freeform.
2. **Quotation sent** – real-time price and details.
3. **Approval & fulfillment** – one-click confirmation and tracking.
4. **Receipt generation** – automatic and secure logging.

---

## 💳 Payment Integration (CloudPayments)

- International card support with tokenized checkout.
- Minimal-click payment approvals.
- All payments and receipts are securely logged.

---

## 🧑‍💻 Assistant & Admin Dashboard (Upcoming)

- Request assignment, tracking, and management.
- KPI and SLA monitoring for assistant performance.
- Escalation handling and real-time activity feeds.

---

## 🧱 Tech Stack Overview

| Layer            | Stack / Tools                                     |
| ---------------- | ------------------------------------------------- |
| Frontend         | **Next.js (App Router)**, Tailwind CSS, shadcn/ui |
| Animations       | Framer Motion                                     |
| Authentication   | Clerk                                             |
| Backend          | Convex (functions + database)                     |
| Payments         | CloudPayments                                     |
| Validation       | Zod                                               |
| State Management | Zustand / Jotai (optional)                        |
| Deployment       | Vercel                                            |
| Dev Environment  | Cursor.ai                                         |

---

## 📁 Recommended File Structure

```bash
.
├── app/                  # Next.js App Router
│   ├── dashboard/        # Client dashboard
│   ├── requests/         # Create/view requests
│   └── (auth)/           # Clerk auth pages
├── components/
│   ├── assistant/        # Assistant chat UI
│   ├── concierge/        # Booking UIs
│   └── layout/           # Header, footer
├── lib/
│   ├── clerk.ts
│   ├── convex.ts
│   ├── payments.ts
│   └── validations.ts
├── convex/
│   ├── functions/
│   ├── schema.ts
│   └── auth.ts
├── public/
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
└── tsconfig.json
```
