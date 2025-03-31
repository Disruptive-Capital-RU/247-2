"use client";

import { useMutation } from "convex/react";
import { api } from "@/lib/convex";
import { useState } from "react";

export default function SendQuoteButton({ requestId }: { requestId: string }) {
  const createQuote = useMutation(api.quotes.createQuote);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSend = async () => {
    await createQuote({
      requestId,
      amount: Number(amount),
      currency: "RUB",
      description
    });
    setAmount("");
    setDescription("");
    alert("Quote sent!");
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Amount (e.g. 25000)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <input
        type="text"
        placeholder="Description (e.g. S-Class booking)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <button
        onClick={handleSend}
        className="w-full px-4 py-2 rounded bg-black text-white"
      >
        Send Quote
      </button>
    </div>
  );
}
