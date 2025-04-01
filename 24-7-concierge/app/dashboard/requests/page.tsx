import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function RequestsPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in?redirect_url=/dashboard/requests");
  }

  return (
    <div className="space-y-8">
      {/* Create Request Section */}
      <div className="bg-[var(--background)] border border-[var(--apple-gray)]/10 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">New Request</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="request-type"
              className="block text-sm font-medium mb-2"
            >
              Request Type
            </label>
            <select
              id="request-type"
              className="w-full rounded-xl border border-[var(--apple-gray)]/20 focus:border-[var(--apple-blue)] focus:ring-1 focus:ring-[var(--apple-blue)] bg-[var(--background)]"
            >
              <option>Travel Arrangement</option>
              <option>Restaurant Reservation</option>
              <option>Event Tickets</option>
              <option>Gift Procurement</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="request-message"
              className="block text-sm font-medium mb-2"
            >
              Request Details
            </label>
            <textarea
              id="request-message"
              rows={4}
              className="w-full rounded-xl border border-[var(--apple-gray)]/20 focus:border-[var(--apple-blue)] focus:ring-1 focus:ring-[var(--apple-blue)] bg-[var(--background)]"
              placeholder="Describe what you need assistance with..."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="request-date"
              className="block text-sm font-medium mb-2"
            >
              Needed By
            </label>
            <input
              type="date"
              id="request-date"
              className="w-full rounded-xl border border-[var(--apple-gray)]/20 focus:border-[var(--apple-blue)] focus:ring-1 focus:ring-[var(--apple-blue)] bg-[var(--background)]"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[var(--apple-blue)] text-white rounded-full px-6 py-3 font-medium transition-all hover:brightness-90"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Request History */}
      <div className="bg-[var(--background)] border border-[var(--apple-gray)]/10 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Recent Requests</h2>

        <div className="space-y-4">
          {/* Request Item */}
          <div className="border border-[var(--apple-gray)]/10 rounded-xl p-5 hover:bg-[var(--apple-light-gray)] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Restaurant Reservation at Nobu</h3>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full text-xs">
                Pending
              </span>
            </div>
            <p className="text-sm text-[var(--apple-gray)] mb-4">
              Table for 4 on Friday at 8pm. Window seat preferred if available.
            </p>
            <div className="flex justify-between items-center text-xs text-[var(--apple-gray)]">
              <span>Submitted on Apr 10, 2023</span>
              <Link href="#" className="text-[var(--apple-blue)]">
                View Details
              </Link>
            </div>
          </div>

          {/* Request Item */}
          <div className="border border-[var(--apple-gray)]/10 rounded-xl p-5 hover:bg-[var(--apple-light-gray)] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Theater Tickets - Hamilton</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs">
                Completed
              </span>
            </div>
            <p className="text-sm text-[var(--apple-gray)] mb-4">
              2 tickets for Hamilton on Broadway, preferably orchestra seats.
            </p>
            <div className="flex justify-between items-center text-xs text-[var(--apple-gray)]">
              <span>Submitted on Mar 25, 2023</span>
              <Link href="#" className="text-[var(--apple-blue)]">
                View Details
              </Link>
            </div>
          </div>

          {/* Request Item */}
          <div className="border border-[var(--apple-gray)]/10 rounded-xl p-5 hover:bg-[var(--apple-light-gray)] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Private Jet Charter</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs">
                In Progress
              </span>
            </div>
            <p className="text-sm text-[var(--apple-gray)] mb-4">
              Private jet from NYC to Miami for 6 passengers on April 15th.
            </p>
            <div className="flex justify-between items-center text-xs text-[var(--apple-gray)]">
              <span>Submitted on Mar 18, 2023</span>
              <Link href="#" className="text-[var(--apple-blue)]">
                View Details
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="#"
            className="text-sm text-[var(--apple-blue)] hover:text-[var(--apple-blue)]/80"
          >
            View All Requests →
          </Link>
        </div>
      </div>
    </div>
  );
}
