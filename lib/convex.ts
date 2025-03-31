import { ConvexReactClient } from "convex/react";
import { ConvexHttpClient } from "convex/browser";

// Create a client for reactive queries and mutations
export const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

// Create a client for non-reactive, HTTP-based queries and mutations
export const api = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
