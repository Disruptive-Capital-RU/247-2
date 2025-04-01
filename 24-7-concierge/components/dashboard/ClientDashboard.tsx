"use client";

import { useQuery } from "convex/react";
import { api } from "@/lib/convex";
import QuotesList from "./QuotesList";

export default function ClientDashboard() {
  const requests = useQuery(api.serviceRequests.listUserRequests);

  if (!requests) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-[var(--apple-gray)]">
          Loading your requests…
        </div>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[var(--apple-blue)]/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[var(--apple-blue)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium">No requests yet</h3>
        <p className="text-[var(--apple-gray)] max-w-md">
          Submit your first concierge request to get started with our premium
          services
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {requests.map((request) => (
        <div
          key={request._id}
          className="bg-[var(--background)] border border-[var(--apple-gray)]/10 p-6 rounded-2xl space-y-4 shadow-sm"
        >
          <div className="flex justify-between items-start">
            <p className="text-lg font-medium">{request.message}</p>
            <span
              className={`px-3 py-1 rounded-full text-xs ${
                request.status === "pending"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                  : request.status === "completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              }`}
            >
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
          </div>
          <QuotesList requestId={request._id} />
        </div>
      ))}
    </div>
  );
}
