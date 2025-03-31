// app/dashboard/layout.tsx
import LanguageToggle from "@/components/dashboard/LanguageToggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 text-black px-4 py-6 md:px-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">24/7 Concierge Dashboard</h1>
        <LanguageToggle />
      </div>
      <main className="space-y-4">{children}</main>
    </div>
  );
}
