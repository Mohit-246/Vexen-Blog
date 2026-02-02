import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Vexen</h3>
            <p className="mt-2 max-w-sm text-sm text-gray-600">
              Writing about backend engineering, system design, and real-world
              software decisions.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm">
            {/* Content */}
            <div className="flex flex-col gap-2">
              <span className="font-medium text-gray-200">Content</span>
              <Link href="/blog" className="text-gray-600 hover:text-gray-300">
                Blogs
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-300">
                About
              </Link>
              <Link
                href="/review"
                className="text-gray-600 hover:text-gray-300"
              >
                Review
              </Link>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <span className="font-medium text-gray-200">Connect</span>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="#"
                  aria-label="GitHub"
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  <Github size={18} />
                </Link>
              </div>
              <div className=" mt-3 flex flex-col gap-3">
                <Link href={"/admin"} className="font-medium text-gray-300">
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vexen. All rights reserved.</p>
          <p>Built with clarity, not hype.</p>
        </div>
      </div>
    </footer>
  );
}
