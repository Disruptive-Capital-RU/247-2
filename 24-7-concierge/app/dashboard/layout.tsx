// app/dashboard/layout.tsx
"use client";

import LanguageToggle from "@/components/dashboard/LanguageToggle";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top navigation */}
      <nav className="backdrop-blur-md bg-[var(--background)]/90 border-b border-[var(--apple-gray)]/10 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12 px-6">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="mr-4 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              title="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/" className="font-semibold text-lg">
              24/7 Concierge
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonBox: "h-8 w-8",
                  userButtonTrigger:
                    "h-8 w-8 rounded-full ring-2 ring-[var(--apple-blue)] ring-offset-2 ring-offset-[var(--background)]",
                  userButtonPopoverCard:
                    "rounded-xl shadow-lg border border-[var(--apple-gray)]/10",
                  userButtonPopoverActionButton:
                    "rounded-lg hover:bg-[var(--apple-light-gray)]",
                  userButtonPopoverActionButtonText: "font-medium",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`bg-[var(--background)] w-64 h-full transform transition-transform duration-200 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                title="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {isLoaded && user && (
              <div className="flex items-center space-x-3 mb-8 p-3 bg-[var(--apple-light-gray)] rounded-xl">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonBox: "h-10 w-10",
                      userButtonTrigger: "h-10 w-10",
                      userButtonPopoverCard: "hidden",
                    },
                  }}
                />
                <div>
                  <p className="font-medium">
                    {user.firstName || user.username}
                  </p>
                  <p className="text-xs text-[var(--apple-gray)]">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </div>
            )}
            <nav className="flex flex-col space-y-1">
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--apple-light-gray)] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/requests"
                className="px-4 py-2 rounded-lg text-[var(--apple-gray)] hover:bg-[var(--apple-light-gray)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Requests
              </Link>
              <Link
                href="/dashboard/settings"
                className="px-4 py-2 rounded-lg text-[var(--apple-gray)] hover:bg-[var(--apple-light-gray)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar and content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[var(--apple-gray)]/10 min-h-[calc(100vh-48px)] hidden md:block p-6">
          <div className="space-y-6">
            {isLoaded && user && (
              <div className="mb-8 p-3 bg-[var(--apple-light-gray)] rounded-xl flex items-center space-x-3">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonBox: "h-10 w-10",
                      userButtonTrigger: "h-10 w-10",
                      userButtonPopoverCard: "hidden",
                    },
                  }}
                />
                <div>
                  <p className="font-medium">
                    {user.firstName || user.username}
                  </p>
                  <p className="text-xs text-[var(--apple-gray)]">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </div>
            )}
            <h2 className="text-sm font-medium text-[var(--apple-gray)]">
              MENU
            </h2>
            <nav className="flex flex-col space-y-1">
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--apple-light-gray)] transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/requests"
                className="px-4 py-2 rounded-lg text-[var(--apple-gray)] hover:bg-[var(--apple-light-gray)] transition-colors"
              >
                Requests
              </Link>
              <Link
                href="/dashboard/settings"
                className="px-4 py-2 rounded-lg text-[var(--apple-gray)] hover:bg-[var(--apple-light-gray)] transition-colors"
              >
                Settings
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 md:p-8">
          <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
          <div className="space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
