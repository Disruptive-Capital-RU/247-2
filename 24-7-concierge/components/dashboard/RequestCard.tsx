"use client";

import SendQuoteButton from "./SendQuoteButton";

export default function RequestCard({ request }: { request: any }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm space-y-2">
      <p className="text-md text-gray-500">Request by {request.userId}</p>
      <p className="text-lg font-medium">{request.message}</p>
      <p className="text-sm text-gray-400">Status: {request.status}</p>
      <SendQuoteButton requestId={request._id} />
    </div>
  );
}
