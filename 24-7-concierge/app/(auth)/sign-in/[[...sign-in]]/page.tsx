import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] to-[var(--apple-light-gray)]">
      <div className="w-full max-w-md px-8 py-12">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-semibold">24/7 Concierge</h1>
          </Link>
          <p className="text-[var(--apple-gray)]">
            Sign in to continue to your personalized concierge services
          </p>
        </div>

        <div className="bg-[var(--background)] rounded-2xl shadow-sm p-8 border border-[var(--apple-gray)]/10">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-[var(--apple-blue)] hover:bg-[var(--apple-blue)]/90 text-white rounded-full px-6 py-3 font-medium transition-all",
                formButtonSecondary:
                  "bg-[var(--apple-light-gray)] text-[var(--foreground)] rounded-full px-6 py-3 font-medium transition-all",
                card: "shadow-none",
                headerTitle: "text-2xl font-medium",
                headerSubtitle: "text-[var(--apple-gray)]",
                socialButtonsIconButton:
                  "border border-[var(--apple-gray)]/20 rounded-xl hover:bg-[var(--apple-light-gray)]",
                socialButtonsBlockButton:
                  "border border-[var(--apple-gray)]/20 rounded-xl hover:bg-[var(--apple-light-gray)]",
                formFieldLabel: "text-[var(--foreground)] font-medium",
                formFieldInput:
                  "rounded-xl border border-[var(--apple-gray)]/20 focus:border-[var(--apple-blue)] focus:ring-1 focus:ring-[var(--apple-blue)]",
                footerActionLink:
                  "text-[var(--apple-blue)] hover:text-[var(--apple-blue)]/80",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
          />
        </div>

        <div className="mt-8 text-center text-sm">
          <p className="text-[var(--apple-gray)]">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[var(--apple-blue)] hover:text-[var(--apple-blue)]/80"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
