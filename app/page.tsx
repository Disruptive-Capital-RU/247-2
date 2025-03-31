import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">24/7 Concierge</h1>
        <p className="text-xl mb-8">
          Premium digital concierge services for high-net-worth travelers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-in"
            className="bg-black text-white rounded-md px-6 py-3 font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="border border-black rounded-md px-6 py-3 font-medium"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
