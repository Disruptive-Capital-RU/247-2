// convex/functions/quotes.ts
import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { Id } from "../_generated/dataModel";

export const createQuote = mutation({
  args: {
    requestId: v.id("serviceRequests"),
    amount: v.number(),
    currency: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const approveQuote = mutation({
  args: {
    quoteId: v.id("quotes"),
  },
  handler: async (ctx, { quoteId }) => {
    await ctx.db.patch(quoteId, {
      status: "approved",
    });
  },
});
import { query, v } from "convex/server";

export const getQuotesByRequestId = query({
  args: { requestId: v.id("serviceRequests") },
  handler: async (ctx, { requestId }) => {
    return await ctx.db
      .query("quotes")
      .withIndex("by_requestId", (q) => q.eq("requestId", requestId))
      .collect();
  }
});
