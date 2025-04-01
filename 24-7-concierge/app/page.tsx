import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-[var(--background)]/90 border-b border-[var(--apple-gray)]/10 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12 px-6">
          <Link href="/" className="font-semibold text-lg">
            24/7 Concierge
          </Link>
          <div className="hidden md:flex space-x-8 text-sm">
            <Link
              href="#services"
              className="hover:text-[var(--apple-blue)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#exclusivity"
              className="hover:text-[var(--apple-blue)] transition-colors"
            >
              Exclusivity
            </Link>
            <Link
              href="#contact"
              className="hover:text-[var(--apple-blue)] transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium hover:text-[var(--apple-blue)] transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--background)] to-[var(--apple-light-gray)]">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          24/7 Concierge
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-[var(--apple-gray)] mb-8">
          Exceptional service. Unparalleled luxury.
        </h2>
        <p className="text-xl max-w-2xl mb-12 text-[var(--apple-gray)]">
          Premium digital concierge services for high-net-worth travelers,
          tailored to your lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up" className="apple-button-primary">
            Join Now
          </Link>
          <Link href="/sign-in" className="apple-button-secondary">
            Sign In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="apple-section bg-[var(--background)]">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Unparalleled Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p className="text-[var(--apple-gray)]">
              Round-the-clock service at your fingertips, whenever you need it.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Exclusive Access</h3>
            <p className="text-[var(--apple-gray)]">
              Private reservations and VIP experiences at the world's premier
              destinations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy Assured</h3>
            <p className="text-[var(--apple-gray)]">
              Discreet service with advanced security measures to protect your
              privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--apple-gray)]/10 mt-auto">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">24/7 Concierge</h3>
              <p className="text-sm text-[var(--apple-gray)]">
                Premium digital concierge services for high-net-worth travelers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-[var(--apple-gray)] hover:text-[var(--foreground)]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[var(--apple-gray)] hover:text-[var(--foreground)]"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[var(--apple-gray)] hover:text-[var(--foreground)]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-[var(--apple-gray)]">
                Email: support@247concierge.com
              </p>
              <p className="text-sm text-[var(--apple-gray)]">
                Phone: +1 (888) 247-0000
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--apple-gray)]/10 text-sm text-[var(--apple-gray)] text-center">
            &copy; {new Date().getFullYear()} 24/7 Concierge. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
