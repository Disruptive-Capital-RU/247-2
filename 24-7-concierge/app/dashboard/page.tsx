import { auth } from "@clerk/nextjs/server";
import React from "react";
import AssistantDashboard from "@/components/dashboard/AssistantDashboard";
import ClientDashboard from "@/components/dashboard/ClientDashboard";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  try {
    // In Clerk v6, auth() is async
    const { userId } = await auth();

    if (!userId) {
      // Redirect to sign-in page if not authenticated
      return redirect("/sign-in?redirect_url=/dashboard");
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
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[var(--apple-blue)]/10 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-[var(--apple-blue)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-3">Authentication Error</h2>
        <p className="text-[var(--apple-gray)] max-w-md mb-8">
          There was a problem authenticating your account. Please try signing in
          again.
        </p>
        <Link
          href="/sign-in"
          className="bg-[var(--apple-blue)] text-white rounded-full px-6 py-3 text-sm font-medium transition-all hover:brightness-90"
        >
          Return to Sign In
        </Link>
      </div>
    );
  }
}
