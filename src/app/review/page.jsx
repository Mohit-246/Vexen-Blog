import reviews from "@/data/review.json";
import ReviewCard from "@/element/ReviewCard";

export default function ReviewSection() {
  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            What Readers Say
          </h2>
          <p className="mt-3 text-gray-600">
            Feedback from developers who value clarity, real-world thinking, and
            production-ready insights.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
