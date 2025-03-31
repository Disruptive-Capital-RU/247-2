// convex/functions/receipts.ts
import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const logReceipt = mutation({
  args: {
    userId: v.string(),
    requestId: v.id("serviceRequests"),
    quoteId: v.id("quotes"),
    amountPaid: v.number(),
    paymentRef: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("receipts", {
      ...args,
      paidAt: Date.now(),
    });

    await ctx.db.patch(args.requestId, {
      status: "completed",
    });
  },
});
