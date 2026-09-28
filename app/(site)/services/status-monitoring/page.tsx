import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Website Status Monitoring & Uptime Alerts | Quadcydle",
  description:
    "24/7 uptime monitoring, real-time alerts, performance tracking, and public status pages for your websites and applications.",
  path: "/services/status-monitoring",
});

export default function StatusMonitoringPage() {
  return (
    <ServicePage
      tag="Status Monitoring"
      accentColor="#22c55e"
      title="Know the Moment Something Goes Wrong"
      subtitle="24/7 monitoring for your websites and APIs. Get instant alerts when downtime happens, track performance trends, and show your customers a live status page."
      stats={[
        { value: "60s", label: "max downtime detection time" },
        { value: "5 regions", label: "global monitoring locations" },
        { value: "99.9%+", label: "average monitored site uptime" },
        { value: "< 1 min", label: "alert delivery time" },
      ]}
      features={[
        {
          icon: "⏱️",
          title: "1-Minute Check Intervals",
          description: "We check your site every minute from multiple global locations. You'll know about downtime within 60 seconds — before your customers do.",
        },
        {
          icon: "🔔",
          title: "Instant Alerts",
          description: "Downtime and performance alerts sent via email, SMS, Slack, or Teams the moment an issue is detected.",
        },
        {
          icon: "🌍",
          title: "Multi-Location Checks",
          description: "Monitored from the UK, USA, Europe, and Asia simultaneously — so regional outages don't go undetected.",
        },
        {
          icon: "📊",
          title: "Performance Tracking",
          description: "Response time trends, apdex scores, and page speed over time — so you spot degradation before it becomes downtime.",
        },
        {
          icon: "📄",
          title: "Public Status Pages",
          description: "A branded status page at status.yourdomain.com showing live uptime, incident history, and current service status for your customers.",
        },
        {
          icon: "📈",
          title: "SLA & Uptime Reports",
          description: "Monthly uptime reports with SLA percentages and incident timeline — useful for internal accountability or client reporting.",
        },
      ]}
      process={[
        { step: 1, title: "Configure Monitors", description: "We set up checks for every URL, endpoint, and API you need monitored." },
        { step: 2, title: "Alert Routing", description: "Alert channels configured — email, SMS, Slack, Teams — routed to the right people." },
        { step: 3, title: "Status Page", description: "Branded status page set up at your subdomain, showing live and historical uptime." },
        { step: 4, title: "Report & Review", description: "Monthly SLA reports delivered, and we review alert patterns with you quarterly." },
      ]}
      pricingTitle="Monitoring Plans"
      pricing={[
        {
          name: "Basic",
          price: 14,
          period: "mo",
          description: "Essential uptime monitoring for small sites.",
          features: [
            "Up to 10 monitors",
            "5-minute check interval",
            "Email alerts",
            "30-day uptime history",
            "Basic status page",
          ],
          cta: "Get Started",
        },
        {
          name: "Professional",
          price: 34,
          period: "mo",
          description: "Comprehensive monitoring for business-critical sites.",
          features: [
            "Up to 50 monitors",
            "1-minute check interval",
            "Email + SMS + Slack alerts",
            "Multi-location checks (5 regions)",
            "Branded status page",
            "90-day uptime history",
            "API monitoring",
            "Incident management",
          ],
          cta: "Get Started",
          highlighted: true,
          badge: "Best Value",
        },
        {
          name: "Enterprise",
          price: 89,
          period: "mo",
          description: "Full monitoring stack for agencies and large applications.",
          features: [
            "Unlimited monitors",
            "30-second check interval",
            "All alert channels + PagerDuty",
            "Multi-location (15+ regions)",
            "Custom branded status page",
            "1-year uptime history",
            "Transaction monitoring",
            "SLA reporting",
          ],
          cta: "Get Started",
        },
      ]}
      faq={[
        {
          question: "What is a monitor?",
          answer: "A monitor is a single URL or endpoint being checked. For example, your homepage, your API health endpoint, and your checkout page would each be a separate monitor.",
        },
        {
          question: "Can you monitor APIs, not just websites?",
          answer: "Yes — we monitor HTTP/HTTPS endpoints, REST APIs, and can verify that specific content is present in the response, not just that the server returns a 200.",
        },
        {
          question: "What does a status page look like?",
          answer: "A clean, branded page at a subdomain of your choice (e.g., status.yourcompany.com) showing live uptime indicators for each of your services, current incidents, and historical uptime percentages.",
        },
        {
          question: "Is this included with hosting?",
          answer: "Basic uptime monitoring is included with our hosting plans. This standalone service is for businesses who want more monitors, shorter check intervals, status pages, and detailed reporting.",
        },
      ]}
      ctaTitle="Know before your customers know"
      ctaSubtitle="Set up monitoring in minutes and never be caught off guard by downtime again."
      ctaLabel="Start Monitoring →"
    />
  );
}
