import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Quadcydle",
  description:
    "We're a full-service digital agency helping businesses grow online through web design, SEO, social media marketing, and business development.",
};

const values = [
  {
    title: "Results First",
    description:
      "Every strategy, every campaign, every line of code is built around one question: does this move the needle for your business?",
  },
  {
    title: "Radical Transparency",
    description:
      "No jargon, no smoke and mirrors. You'll always know what we're working on, why, and what results to expect.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We build for sustainable growth, not vanity metrics. The relationships we build with clients last for years, not projects.",
  },
  {
    title: "Craft & Quality",
    description:
      "From pixel-perfect design to clean, performant code — we take pride in the craft behind every deliverable.",
  },
];

const services = [
  { name: "Web Design & Development", icon: "🌐" },
  { name: "Search Engine Optimisation", icon: "🔍" },
  { name: "Social Media Marketing", icon: "📱" },
  { name: "Paid Advertising", icon: "📊" },
  { name: "Web Hosting & Maintenance", icon: "☁️" },
  { name: "Mobile App Development", icon: "📲" },
  { name: "Brand Strategy", icon: "🎯" },
  { name: "Business Development", icon: "🚀" },
];

const About = () => {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center md:py-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          About Quadcydle
        </p>
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          We help businesses grow in the digital world
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-text md:text-xl">
          Quadcydle is a full-service digital agency founded on the belief that
          every business — regardless of size — deserves a powerful, professional
          online presence. We partner with our clients for the long haul, not just
          a single project.
        </p>
      </section>

      {/* Mission */}
      <section className="border-y border-transparent-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-text">
                Our Mission
              </p>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Turning digital ambition into measurable results
              </h2>
            </div>
            <p className="text-lg text-primary-text leading-relaxed">
              We exist to close the gap between where businesses are and where
              they want to be online. Whether you need a stunning new website,
              a social media strategy that actually works, or a roadmap for
              scaling your business — we bring the expertise, the tools, and the
              commitment to make it happen. Every client gets senior-level
              attention, honest advice, and deliverables they're proud to show off.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary-text">
            What We Do
          </p>
          <h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">
            Our Services
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center rounded-2xl border border-transparent-white bg-glass-gradient p-6 text-center"
              >
                <span className="mb-3 text-4xl">{service.icon}</span>
                <p className="text-sm font-medium leading-snug">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-transparent-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary-text">
            What Drives Us
          </p>
          <h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-transparent-white bg-glass-gradient p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-primary-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center md:py-28">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-text">
          Let's talk about your goals. We'll put together a strategy tailored to
          your business, no strings attached.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
};

export default About;
