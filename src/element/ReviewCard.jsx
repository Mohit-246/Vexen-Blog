import Image from "next/image";

export default function ReviewCard({ review }) {
  if (!review) return null;

  const { image, name, rating = 5, text } = review;

  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={image || "/profileplaceholder.jpg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm leading-relaxed text-gray-600">“{text}”</p>
    </div>
  );
}
