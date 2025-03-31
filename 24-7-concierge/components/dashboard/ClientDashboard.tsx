"use client";

import { useQuery } from "convex/react";
import { api } from "@/lib/convex";
import QuotesList from "./QuotesList";

export default function ClientDashboard() {
  const requests = useQuery(api.serviceRequests.listUserRequests);

  if (!requests) return <p>Loading your requests…</p>;

  return (
    <div className="space-y-6">
      {requests.map((request) => (
        <div key={request._id} className="border p-4 rounded-2xl space-y-2">
          <p className="text-lg font-medium">{request.message}</p>
          <p className="text-sm text-gray-500">Status: {request.status}</p>
          <QuotesList requestId={request._id} />
        </div>
      ))}
    </div>
  );
}
