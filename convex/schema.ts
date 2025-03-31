import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  serviceRequests: defineTable({
    userId: v.string(),
    message: v.string(),
    status: v.string(),
    quote: v.optional(v.string()),
    createdAt: v.number(),
  }),

  assistants: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    active: v.boolean(),
    createdAt: v.number(),
  }),

  clients: defineTable({
    userId: v.string(),
    assistantId: v.optional(v.id("assistants")),
    preferredContact: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    createdAt: v.number(),
  }),

  transactions: defineTable({
    userId: v.string(),
    requestId: v.optional(v.id("serviceRequests")),
    amount: v.number(),
    currency: v.string(),
    status: v.string(),
    description: v.string(),
    createdAt: v.number(),
  }),
});
