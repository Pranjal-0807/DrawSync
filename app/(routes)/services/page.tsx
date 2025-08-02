"use client";

import Header from "../../_components/Header";
import { features } from "@/app/_constant/Constant";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Services() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-100 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Built to help teams ideate, design, and deliver — faster.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-indigo-50 p-6 rounded-lg shadow text-left"
            >
              <h3 className="text-xl font-semibold text-indigo-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Experience the DrawSync difference
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Start diagramming smarter — collaborate with confidence and clarity.
        </p>

        <RegisterLink>
          <div className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Try It Free
          </div>
        </RegisterLink>
      </section>
    </>
  );
}
