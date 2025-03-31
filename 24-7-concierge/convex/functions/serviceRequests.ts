import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

import { query } from "convex/server";

export const listAll = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("serviceRequests")
      .order("desc") // latest first
      .collect();
  },
});

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("serviceRequests")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();
  },
});

export const createRequest = mutation({
  args: { userId: v.string(), message: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("serviceRequests", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const updateRequestStatus = mutation({
  args: {
    id: v.id("serviceRequests"),
    status: v.string(),
    quote: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, status, quote } = args;
    const update: any = { status };
    if (quote) {
      update.quote = quote;
    }

    return await ctx.db.patch(id, update);
  },
});
export const listUserRequests = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    return await ctx.db
      .query("serviceRequests")
      .withIndex("by_userId", (q) => q.eq("userId", identity.subject))
      .collect();
  }
});
