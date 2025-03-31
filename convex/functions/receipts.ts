// convex/functions/receipts.ts
import { mutation, v } from "convex/server";

export const logReceipt = mutation({
  args: {
    userId: v.string(),
    requestId: v.id("serviceRequests"),
    quoteId: v.id("quotes"),
    amountPaid: v.number(),
    paymentRef: v.string()
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("receipts", {
      ...args,
      paidAt: Date.now()
    });

    await ctx.db.patch("serviceRequests", args.requestId, {
      status: "completed"
    });
  }
});
