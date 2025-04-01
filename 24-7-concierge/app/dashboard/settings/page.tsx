import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in?redirect_url=/dashboard/settings");
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[var(--background)] border border-[var(--apple-gray)]/10 rounded-2xl p-6 md:p-8 shadow-sm">
        <UserProfile
          appearance={{
            elements: {
              card: "shadow-none p-0",
              navbar: "hidden",
              navbarMobileMenuButton: "hidden",
              headerTitle: "text-2xl font-medium",
              headerSubtitle: "text-[var(--apple-gray)]",
              profilePage: {
                root: "max-w-full p-0",
              },
              formButtonPrimary:
                "bg-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/90 text-white rounded-full px-6 py-3 font-medium transition-all",
              formButtonSecondary:
                "bg-[var(--apple-light-gray)] text-[var(--foreground)] rounded-full px-6 py-3 font-medium transition-all",
              formFieldLabel: "text-[var(--foreground)] font-medium",
              formFieldInput:
                "rounded-xl border border-[var(--apple-gray)]/20 focus:border-[var(--apple-blue)] focus:ring-1 focus:ring-[var(--apple-blue)]",
              formFieldErrorText: "text-red-500 text-sm",
              formFieldSuccessText: "text-green-500 text-sm",
              userPreviewMainIdentifier: "font-semibold",
              userPreviewSecondaryIdentifier: "text-[var(--apple-gray)]",
              userButtonAvatarBox: "h-10 w-10 rounded-full",
              scrollBox: "rounded-md border border-[var(--apple-gray)]/10 p-4",
            },
          }}
          path="/dashboard/settings"
          routing="path"
        />
      </div>
    </div>
  );
}
