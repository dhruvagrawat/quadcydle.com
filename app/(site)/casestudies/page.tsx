import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Quadcydle",
  description:
    "Real results for real businesses. Explore how Quadcydle has helped companies grow their digital presence and revenue.",
};

const caseStudies = [
  {
    client: "GreenLeaf Organics",
    industry: "E-commerce / Food & Beverage",
    tag: "Web Development + SEO",
    tagColor: "bg-purple-500/20 text-purple-300",
    challenge:
      "An organic grocery brand with a dated website and near-zero organic traffic, losing customers to better-ranked competitors.",
    solution:
      "We rebuilt their Shopify storefront from scratch with a modern design and implemented a full technical SEO overhaul, including structured data, page speed improvements, and a content strategy targeting 40+ long-tail keywords.",
    results: [
      { metric: "312%", label: "increase in organic traffic" },
      { metric: "2.4×", label: "improvement in conversion rate" },
      { metric: "£48k", label: "additional monthly revenue" },
    ],
  },
  {
    client: "NovaCare Clinic",
    industry: "Healthcare / Medical",
    tag: "Web Design + Local SEO",
    tagColor: "bg-blue-500/20 text-blue-300",
    challenge:
      "A private healthcare clinic struggling to fill appointment slots, relying entirely on word-of-mouth referrals with no digital strategy.",
    solution:
      "We designed a professional, trust-building website and launched a local SEO campaign targeting their city and surrounding areas, including Google Business Profile optimisation and targeted blog content.",
    results: [
      { metric: "5×", label: "increase in online bookings" },
      { metric: "#1", label: "Google ranking for 12 local keywords" },
      { metric: "60%", label: "reduction in cost per new patient" },
    ],
  },
  {
    client: "Forma Studio",
    industry: "Interior Design / B2B",
    tag: "Social Media + Paid Ads",
    tagColor: "bg-orange-500/20 text-orange-300",
    challenge:
      "A high-end interior design firm with beautiful work but no social presence, struggling to reach commercial clients for large-scale projects.",
    solution:
      "We managed their Instagram and LinkedIn presence and ran targeted Meta and LinkedIn ad campaigns showcasing their portfolio to property developers and corporate clients.",
    results: [
      { metric: "18k", label: "Instagram followers in 6 months" },
      { metric: "7 leads", label: "from LinkedIn in first quarter" },
      { metric: "£250k+", label: "project pipeline generated" },
    ],
  },
  {
    client: "TechStart Hub",
    industry: "Coworking / Startups",
    tag: "Full-Service Digital",
    tagColor: "bg-green-500/20 text-green-300",
    challenge:
      "A coworking space launch needing a brand identity, website, SEO, and social media all built from zero in under 8 weeks.",
    solution:
      "We delivered a complete digital launch: brand guidelines, a Next.js website, Google Ads campaign, and social media setup across all platforms — all within the deadline.",
    results: [
      { metric: "100%", label: "occupancy in month 3" },
      { metric: "4.9★", label: "Google rating within 90 days" },
      { metric: "8 weeks", label: "from zero to full launch" },
    ],
  },
  {
    client: "Zenith Fitness",
    industry: "Health & Wellness",
    tag: "Mobile App + Marketing",
    tagColor: "bg-pink-500/20 text-pink-300",
    challenge:
      "A gym chain wanted a branded mobile app for class booking and a retention strategy to reduce member churn.",
    solution:
      "We developed a React Native app with class scheduling, push notifications, and loyalty points, paired with an email re-engagement campaign and social content calendar.",
    results: [
      { metric: "35%", label: "reduction in member churn" },
      { metric: "4.7★", label: "App Store rating" },
      { metric: "2,200+", label: "active app users in month 1" },
    ],
  },
  {
    client: "Atlas Legal",
    industry: "Professional Services / Legal",
    tag: "Web Redesign + SEO",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    challenge:
      "A law firm with a 2015-era website, no blog content, and poor visibility for high-value search terms in a competitive market.",
    solution:
      "Complete website redesign focused on trust and authority, paired with a 12-month content programme publishing expert legal guides targeting commercial and property law keywords.",
    results: [
      { metric: "220%", label: "growth in organic enquiries" },
      { metric: "Top 3", label: "rankings for 8 commercial law terms" },
      { metric: "40%", label: "lower cost per lead vs. paid ads" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center md:py-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-text">
          Case Studies
        </p>
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Real businesses. Real results.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-text md:text-xl">
          See how we've helped businesses across industries grow their online
          presence, generate more leads, and increase revenue through strategic
          digital work.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl space-y-10">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="rounded-3xl border border-transparent-white bg-glass-gradient p-8 md:p-10"
            >
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${study.tagColor}`}
                  >
                    {study.tag}
                  </span>
                  <h2 className="text-2xl font-bold">{study.client}</h2>
                  <p className="mt-1 text-sm text-primary-text">{study.industry}</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-text">
                      The Challenge
                    </p>
                    <p className="text-primary-text leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-text">
                      Our Solution
                    </p>
                    <p className="text-primary-text leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-text">
                    Results
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <p className="text-3xl font-bold md:text-4xl">{r.metric}</p>
                        <p className="mt-1 text-xs text-primary-text leading-snug">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-transparent-white px-6 py-20 text-center md:py-28">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Want results like these?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-text">
          Let's talk about your business. We'll put together a custom strategy
          and show you exactly what we'd do — no obligation.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          Start Your Project →
        </a>
      </section>
    </div>
  );
};

export default CaseStudies;
