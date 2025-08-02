import Link from "next/link";
import Header from "../../_components/Header";
import { OpenPositions } from "@/app/_constant/Constant";

export default function Careers() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Careers at DrawSync
          </h1>
          <p className="text-xl text-gray-600">
            Build the future of collaboration. Join a team shaping tools for
            millions.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Open Positions
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {OpenPositions.map((item) => (
              <div
                key={item.title}
                className="bg-gray-100 p-6 rounded-lg shadow text-left"
              >
                <h3 className="text-xl font-semibold text-sky-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Let’s build together
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We value builders, dreamers, and collaborators. Let’s make a lasting
          impact — together.
        </p>
        <Link
          href="mailto:careers@drawsync.app"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Apply Now
        </Link>
      </section>
    </>
  );
}
