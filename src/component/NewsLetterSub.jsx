import { Bookmark } from "lucide-react";

export default function NewsLetterSub() {
  return (
    <section id="newsletter" className="w-full py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Subscribe to Vexen Newsletter
        </h2>
        <p className="mt-4 text-gray-600">
          No noise. Just real-world engineering insights.
        </p>
      </div>

      {/* Subscription Box */}
      <div className="mx-auto mt-6 max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <form className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            className="flex items-center gap-6 justify-center rounded-lg bg-amber-500 py-3 text-sm font-medium text-white transition hover:bg-gray-900"
          >
            Subscribe <Bookmark size={18} />
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          Unsubscribe anytime. Your inbox stays clean.
        </p>
      </div>
      {/* Information Points */}
      <div className="mx-auto my-6 max-w-3xl grid md:grid-cols-2 grid-cols-1 gap-x-8 text-sm text-gray-700">
        <p>• Practical backend & system design breakdowns</p>
        <p>• Lessons from building production-ready systems</p>
        <p>• Clear thinking over trendy frameworks</p>
        <p>• One email per week. No spam.</p>
      </div>
    </section>
  );
}
