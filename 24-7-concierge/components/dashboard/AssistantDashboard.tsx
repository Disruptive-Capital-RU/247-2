"use client";

import { useQuery } from "convex/react";
import { api } from "@/lib/convex";
import RequestCard from "./RequestCard"; // We’ll build this next

export default function AssistantDashboard() {
  const requests = useQuery(api.serviceRequests.listAll);

  if (!requests) return <p>Loading requests…</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {requests.map((req) => (
        <RequestCard key={req._id} request={req} />
      ))}
    </div>
  );
}
