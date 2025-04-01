"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/lib/convex";

export default function QuotesList({ requestId }: { requestId: string }) {
  const quotes = useQuery(api.quotes.getQuotesByRequestId, { requestId });
  const approveQuote = useMutation(api.quotes.approveQuote);

  if (!quotes)
    return (
      <div className="animate-pulse text-[var(--apple-gray)] p-2">
        Loading quotes…
      </div>
    );

  if (quotes.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {quotes.map((quote) => (
        <div
          key={quote._id}
          className="border border-[var(--apple-gray)]/10 rounded-xl p-4 bg-[var(--background)] space-y-2"
        >
          <p className="font-medium">{quote.description}</p>
          <p className="text-[var(--apple-blue)] font-medium">
            {quote.amount} {quote.currency}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-[var(--apple-gray)]">
              Status:{" "}
              {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
            </p>
            {quote.status === "pending" && (
              <button
                className="apple-button-primary text-xs py-1.5"
                onClick={() => approveQuote({ quoteId: quote._id })}
              >
                Approve
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
