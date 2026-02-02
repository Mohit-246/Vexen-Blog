"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 w-full bg-white/70 border-b border-gray-200 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex w-full justify-between items-center">
            <Link href={"/"} className="font-bold text-2xl">
              Vexen
            </Link>

            <ul className="hidden lg:flex gap-8 items-center font-medium text-sm">
              <li>
                <Link href="/blog" className="hover:text-amber6bg-amber-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-amber6bg-amber-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/review" className="hover:text-amber6bg-amber-500">
                  Review
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="lg:hidden py-2 px-4 text-white text-sm bg-amber-500 rounded-xl  hover:shadow-2xl hover:bg-gray-900"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-xl">
            {/* Close */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setOpen(!open)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-sm font-medium">
              <li>
                <Link
                  href="/blog"
                  onClick={() => setOpen(!open)}
                  className="hover:text-amber-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={() => setOpen(!open)}
                  className="hover:text-amber-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/review"
                  onClick={() => setOpen(!open)}
                  className="hover:text-amber-500"
                >
                  Review
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
