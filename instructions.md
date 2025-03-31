
# 24/7 Concierge – Full Technical Documentation

## Overview

24/7 Concierge is a premium digital concierge platform tailored for high-net-worth travelers visiting Moscow, primarily catering to clients from the Middle East. It delivers luxury service fulfillment through a sleek, mobile-first interface and seamless backend coordination.

The core value proposition is a "request and relax" model, where a personal Executive Assistant handles everything on behalf of the client. The system is optimized for speed, trust, and simplicity.

This project is developed using Cursor.ai, leveraging the Next.js App Router and a modern, scalable architecture.

--- 

### Core Proposition

A “request and relax” model where a personal Executive Assistant handles everything for the client. Interaction is via WhatsApp, Telegram, or phone—minimal effort, maximum result.
## Core Functionalities

### Authentication (Clerk)
- Secure sign-up and login via phone number, email, or social authentication.
- SMS-first login flow with minimal friction.
- Clerk metadata (e.g., preferred contact method, client tags) stored in Convex.

### Executive Assistant System
- Each client is assigned an assistant post-registration.
- Assistants receive, manage, and fulfill service requests in real time.
- Communication via WhatsApp, Telegram, or phone calls.
- All interactions are logged and tied to user identity in Convex.

### Service Request Flow
- Users submit free-form or structured service requests (e.g., "Book a Mercedes S-Class tonight").
- Backend flow: Request → Quotation → Approval → Fulfillment.
- Assistants and clients interact through a chat-like interface.
- Receipts and confirmations are automatically generated.

### Payment Integration
- International payments supported via CloudPayments.
- Tokenized checkout flow for secure card processing.
- Minimal-click approval and payment process.
- Automatic receipt generation and logging.

### Admin & Assistant Dashboard (Planned)
- View, assign, and manage client requests.
- Monitor KPIs and SLAs per assistant.
- Real-time logs of all client activity and payments.
- Escalation system and assistant performance tracking.

---

## Tech Stack

| Feature                 | Tool / Stack                                      |
|------------------------|---------------------------------------------------|
| Frontend Framework      | Next.js (App Router)                              |
| UI Components           | Tailwind CSS, shadcn/ui, Lucide Icons             |
| Animations              | Framer Motion                                     |
| Backend                 | Convex (serverless database and functions)        |
| Authentication          | Clerk                                             |
| Payments                | CloudPayments                                     |
| File Uploads            | UploadThing (optional)                            |
| Form Validation         | Zod (type-safe schema validation)                 |
| State Management        | Zustand or Jotai (optional)                       |
| Formatting Utilities    | date-fns, Intl.NumberFormat                       |
| Deployment              | Vercel                                            |
| Development Environment | Cursor.ai                                         |

---

## File Structure

```bash
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   ├── requests/
│   └── (auth)/
│       ├── sign-in/
│       └── sign-up/
├── components/
│   ├── ui/
│   ├── assistant/
│   ├── concierge/
│   └── layout/
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

---

## Authentication with Clerk

### Clerk Middleware Protection

```ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"]
});
```

### Session Handling in Server Component

```ts
import { auth } from "@clerk/nextjs";
import { api } from "@/lib/convex";

export default async function Dashboard() {
  const { userId } = auth();
  const data = await api.serviceRequests.list({ userId });
  return <div>{/* Render client dashboard */}</div>;
}
```

### Clerk Metadata for Personalization

```ts
await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata: {
    preferredContact: "whatsapp",
    tags: ["VIP", "Arabic-speaking"]
  }
});
```

---

## Executive Assistant System

- Assigned immediately upon user registration.
- Communication over WhatsApp, Telegram, or phone.
- All actions and messages logged to Convex.
- Assistant performance tracked via internal metrics.

---

## Service Request Flow

1. Client initiates request
2. Assistant receives and responds
3. Quotation is generated
4. Client approves
5. Fulfillment occurs
6. Receipt is logged and sent

---

## Convex Schema Example

```ts
export const serviceRequests = defineTable({
  userId: v.string(),
  message: v.string(),
  status: v.string(),
  quote: v.optional(v.string()),
  createdAt: v.number()
});
```

### Convex Backend Function

```ts
export const createRequest = mutation({
  args: { userId: v.string(), message: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("serviceRequests", {
      ...args,
      status: "pending",
      createdAt: Date.now()
    });
  }
});
```

---

## Payment Integration (CloudPayments)

### Tokenized Frontend Checkout

```ts
import { getCloudPaymentUrl } from "@/lib/payments";

const url = await getCloudPaymentUrl({
  amount: 5000,
  currency: "RUB",
  description: "Luxury airport pickup",
  email: user.email
});

router.push(url);
```

### CloudPayments Callback Handler

```ts
export async function POST(req: Request) {
  const body = await req.json();
  if (body.Status === "Completed") {
    // Update status in Convex
  }
  return NextResponse.json({ ok: true });
}
```

---

## Assistant Chat UI Component

```tsx
export function ChatBubble({ message, from }: { message: string; from: "client" | "assistant" }) {
  return (
    <div className={`p-3 rounded-2xl ${from === "assistant" ? "bg-neutral-200" : "bg-primary text-white"}`}>
      {message}
    </div>
  );
}
```

---

## Getting Started for Developers

### Install Dependencies

```bash
npm install
```

### Environment Variables

```env
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CONVEX_DEPLOYMENT=your_convex_deployment_url
CLOUDPAYMENTS_PUBLIC_ID=your_cloudpayments_public_id
```

### Run Locally

```bash
npm run dev
```

---

## Admin & Assistant Dashboard (Planned)

- Assign and monitor client requests
- Track SLAs and assistant KPIs
- Escalate urgent tasks
- Real-time payment + interaction logs

---

## Notes

- Localization: Arabic and English support based on Clerk metadata.
- Minimal clicks: All flows (auth, request, payment) optimized for speed and elegance.
- Audit logs: Every action tied to identity via Convex.
- Luxury ethos: Every screen, message, and flow reflects high-end service culture.

---

## Deployment

Deployed via Vercel with global edge support for instant performance. Development is streamlined via Cursor AI, enabling ultra-fast iteration with high-quality TypeScript tooling.

---

## Contributing

This is a luxury-first product. Every line of code should reflect simplicity, elegance, and reliability. Use PR reviews to maintain high standards.
