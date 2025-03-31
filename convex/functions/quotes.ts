// convex/functions/quotes.ts
import { mutation, v } from "convex/server";
import { Id } from "./_generated/dataModel";

export const createQuote = mutation({
  args: {
    requestId: v.id("serviceRequests"),
    amount: v.number(),
    currency: v.string(),
    description: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      ...args,
      status: "pending",
      createdAt: Date.now()
    });
  }
});

export const approveQuote = mutation({
  args: {
    quoteId: v.id("quotes")
  },
  handler: async (ctx, { quoteId }) => {
    await ctx.db.patch("quotes", quoteId, {
      status: "approved"
    });
  }
});
