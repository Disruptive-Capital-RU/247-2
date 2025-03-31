import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-xl">
        <h1 className="text-4xl font-bold mb-4">24/7 Concierge</h1>
        <p className="text-xl mb-8">
          Premium digital concierge services for high-net-worth travelers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-in"
            className="bg-black text-white rounded-md px-6 py-3 font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="border border-black/[.08] dark:border-white/[.145] rounded-md px-6 py-3 font-medium transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]"
          >
            Create Account
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </footer>
    </div>
  );
}
