import { auth } from "@clerk/nextjs/server";
import React from "react";
import AssistantDashboard from "@/components/dashboard/AssistantDashboard";
import ClientDashboard from "@/components/dashboard/ClientDashboard";

export default async function DashboardPage() {
  try {
    // In Clerk v6, auth() is async
    const { userId } = await auth();

    if (!userId) {
      return null; // Handle unauthenticated state, redirect to login
    }

    // Hard-coded role for now
    // In a real app, you would fetch this from the user's metadata
    const isAssistant = false;

    // Simple conditional rendering
    if (isAssistant) {
      return <AssistantDashboard />;
    }

    return <ClientDashboard />;
  } catch (error) {
    console.error("Authentication error:", error);
    return <div>Error loading dashboard</div>;
  }
}
