// app/dashboard/layout.tsx
import LanguageToggle from "@/components/dashboard/LanguageToggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top navigation */}
      <nav className="backdrop-blur-md bg-[var(--background)]/90 border-b border-[var(--apple-gray)]/10 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12 px-6">
          <Link href="/" className="font-semibold text-lg">
            24/7 Concierge
          </Link>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      {/* Sidebar and content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[var(--apple-gray)]/10 min-h-[calc(100vh-48px)] hidden md:block p-6">
          <div className="space-y-6">
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
