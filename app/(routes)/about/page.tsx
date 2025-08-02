import Link from "next/link";
import Header from "../../_components/Header";
import { CoreValues } from "@/app/_constant/Constant";

export default function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About DrawSync
          </h1>
          <p className="text-xl text-gray-600">
            Empowering engineering teams with modern diagramming and
            documentation tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At DrawSync, we believe every team deserves tools that match their
              pace and ambition. Our platform brings clarity to chaos by letting
              teams brainstorm, document, and collaborate in real time.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're building system architecture, designing product
              flows, or drafting technical docs, DrawSync helps make your ideas
              visual, collaborative, and beautifully organized.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-illustration_1284-20522.jpg"
            alt="Teamwork Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-sky-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CoreValues.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-sky-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Join us on our journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We’re building DrawSync for teams who care about doing their best
          work. Whether you're a solo founder or a large enterprise, we’d love
          to build with you.
        </p>
        <Link
          href="/careers"
          className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
        >
          Explore Careers
        </Link>
      </section>
    </>
  );
}
