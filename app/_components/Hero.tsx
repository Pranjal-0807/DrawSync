import React from "react";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full text-center py-12">
        {/* Tagline */}
        <h2 className="inline-block text-sm sm:text-base font-medium px-4 py-2 rounded-full text-emerald-700 bg-emerald-100 border border-emerald-200 mb-6">
          See What's New | <span className="text-sky-600">AI Diagram</span>
        </h2>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Documents & Diagrams
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-3">
          for engineering teams
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          A beautiful markdown editor, collaborative whiteboard, and
          diagram-as-code builder — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            className="rounded-lg bg-emerald-500 text-white px-8 py-3 font-semibold text-sm hover:bg-emerald-600 transition"
            href="/services"
          >
            Learn More
          </Link>

          <RegisterLink>
            <div className="rounded-lg border border-gray-300 text-gray-700 px-8 py-3 font-semibold text-sm hover:bg-gray-100 transition">
              Try It Free
            </div>
          </RegisterLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
