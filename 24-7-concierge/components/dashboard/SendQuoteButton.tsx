"use client";

import { useMutation } from "convex/react";
import { api } from "@/lib/convex";
import { useState } from "react";

export default function SendQuoteButton({ requestId }: { requestId: string }) {
  const createQuote = useMutation(api.quotes.createQuote);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!amount || !description) return alert("Please fill all fields");

    await createQuote({
      requestId,
      amount: Number(amount),
      currency: "RUB",
      description,
    });

    setAmount("");
    setDescription("");
    alert("Quote sent!");
  };

  return (
    <div className="mt-2 space-y-2">
      <input
        type="number"
        placeholder="Amount (₽)"
        className="w-full p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="w-full p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        Send Quote
      </button>
    </div>
  );
}
