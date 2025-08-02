"use client";

import Header from "../../_components/Header";
import { projects } from "@/app/_constant/Constant";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Projects() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-100 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            DrawSync in Action
          </h1>
          <p className="text-xl text-gray-600">
            See what our users are building with DrawSync.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-200 shadow-md p-6 bg-yellow-50"
            >
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{project.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Ready to build your next big thing?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of engineering teams creating clarity with DrawSync.
        </p>

        <RegisterLink>
          <div className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition">
            Start Free
          </div>
        </RegisterLink>
      </section>
    </>
  );
}
