import * as z from "zod";

export const serviceRequestSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  message: z.string().min(1, "Message is required"),
  status: z.enum(["pending", "quoted", "approved", "fulfilled", "cancelled"]),
  quote: z.string().optional(),
  createdAt: z.number(),
});

export const paymentSchema = z.object({
  amount: z.number().min(1, "Amount is required"),
  currency: z.enum(["RUB", "USD", "EUR"]),
  description: z.string().min(1, "Description is required"),
  email: z.string().email("Invalid email address"),
});
