import Header from "../../_components/Header";
import { timelines } from "@/app/_constant/Constant";

export default function History() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-100 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Journey</h1>
          <p className="text-xl text-gray-600">
            From an idea to a platform used by thousands of teams worldwide.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {timelines.map(({ year, event, desc }) => (
            <div
              key={year}
              className="relative pl-8 border-l-4 border-purple-500"
            >
              <h3 className="text-xl font-semibold text-purple-700">
                {year} – {event}
              </h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="bg-purple-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          The Future of Visual Collaboration
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We’re just getting started. Our goal is to make DrawSync the fastest,
          most delightful way to think, build, and collaborate.
        </p>
      </section>
    </>
  );
}
