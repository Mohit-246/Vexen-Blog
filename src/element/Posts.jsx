import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

/* Utils */
function truncateWords(text = "", limit = 30) {
  const words = text.trim().split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

const COLORS = [
  "bg-blue-50 text-blue-600",
  "bg-green-50 text-green-600",
  "bg-purple-50 text-purple-600",
  "bg-orange-50 text-orange-600",
];

function getColorByTag(tag = "") {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash += tag.charCodeAt(i);
  }
  return COLORS[hash % COLORS.length];
}

/* Recent Blog Card */
export function RecentPost({ post }) {
  if (!post) return null;

  const {
    image,
    title,
    tags = [],
    description,
    date,
    author,
    likes,
    comments,
  } = post;

  return (
    <div className="flex flex-col md:flex-row gap-6 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition">
      {/* IMAGE SECTION */}
      <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
        <Image
          src={image || "/blogplaceholder.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 256px"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex flex-col justify-between w-full">
        <div>
          {/* Tags */}
          <ul className="flex flex-wrap gap-2 text-xs mb-3 font-medium">
            {tags.map((tag) => (
              <li
                key={tag}
                className={`px-2 py-1 rounded-full ${getColorByTag(tag)}`}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Title */}
          <h2 className="text-xl font-semibold leading-snug hover:text-amber-600 cursor-pointer">
            {title}
          </h2>

          {/* Meta */}
          <p className="mt-1 text-xs text-neutral-500">
            {date && new Date(date).toDateString()}
            {author && ` · ${author}`}
          </p>

          {/* Description */}
          <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
            {truncateWords(description, 60)}
          </p>

          {/* ENGAGEMENT BAR */}
          <div className="mt-4 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-1 hover:text-rose-500 transition">
              <Heart size={16} className="stroke-[1.5]" />
              <span>{likes ?? 0}</span>
            </div>

            <div className="flex items-center gap-1 hover:text-blue-500 transition">
              <MessageCircle size={16} className="stroke-[1.5]" />
              <span>{comments ?? 0}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <button className="mt-4 text-sm font-medium text-amber-600 hover:underline self-start">
          Read more →
        </button>
      </div>
    </div>
  );
}

/* Blog Post Card */
export function BlogCard({ post }) {
  if (!post) return null;

  const {
    image,
    title,
    tags = [],
    description,
    date,
    author,
    buttonText,
  } = post;

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition">
      {/* IMAGE SECTION */}
      <div className="relative w-full h-48">
        <Image
          src={image || "/blogplaceholder.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5">
        <ul className="flex flex-wrap gap-2 text-xs mb-3 font-medium">
          {tags.map((tag) => (
            <li
              key={tag}
              className={`px-2 py-1 rounded-full ${getColorByTag(tag)}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold leading-snug hover:text-amber-600 cursor-pointer">
          {title}
        </h2>

        <p className="mt-1 text-xs text-neutral-500">
          {date && new Date(date).toDateString()}
          {author && ` · ${author}`}
        </p>

        <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
          {truncateWords(description, 30)}
        </p>

        {/* ENGAGEMENT BAR */}
        <div className="mt-4 flex items-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <Heart size={16} className="stroke-[1.5]" />
            <span>{post.likes ?? 0}</span>
          </div>

          <div className="flex items-center gap-1">
            <MessageCircle size={16} className="stroke-[1.5]" />
            <span>{post.comments ?? 0}</span>
          </div>
        </div>

        <button className="mt-4 text-sm font-medium text-amber-600 hover:underline">
          {buttonText || "Read more"} →
        </button>
      </div>
    </div>
  );
}
