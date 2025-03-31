"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/lib/convex";

export default function QuotesList({ requestId }: { requestId: string }) {
  const quotes = useQuery(api.quotes.getQuotesByRequestId, { requestId });
  const approveQuote = useMutation(api.quotes.approveQuote);

  if (!quotes) return <p>Loading quotes…</p>;

  return (
    <div className="space-y-3">
      {quotes.map((quote) => (
        <div
          key={quote._id}
          className="border rounded-xl p-3 shadow-sm bg-white space-y-1"
        >
          <p><b>{quote.description}</b></p>
          <p>{quote.amount} {quote.currency}</p>
          <p className="text-sm text-gray-500">Status: {quote.status}</p>
          {quote.status === "pending" && (
            <button
              className="bg-green-600 text-white px-3 py-1 rounded mt-2"
              onClick={() => approveQuote({ quoteId: quote._id })}
            >
              Approve
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
