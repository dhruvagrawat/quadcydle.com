import { Metadata } from "next";
import { ServicePage } from "../../../../components/services/ServicePage";
import { pageMeta } from "../../../../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Full-Stack App Hosting — Node, Python & Docker | Quadcydle",
  description:
    "Managed cloud hosting for full-stack web applications. Node.js, Python, Docker, Go — deployed and managed on AWS or GCP.",
  path: "/services/fullstack-hosting",
});

export default function FullStackHostingPage() {
  return (
    <ServicePage
      tag="Full-Stack Hosting"
      accentColor="#f59e0b"
      title="Cloud Hosting for Real Applications"
      subtitle="Node.js, Python, Docker, Go, Ruby — we deploy and manage your full-stack application on AWS or GCP with proper CI/CD, monitoring, and scaling."
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80"
      stats={[
        { value: "AWS", label: "& GCP certified engineers" },
        { value: "< 30s", label: "deployment time with CI/CD" },
        { value: "99.95%", label: "production SLA" },
        { value: "Auto", label: "scaling under load" },
      ]}
      features={[
        {
          icon: "🐳",
          title: "Docker & Kubernetes",
          description: "Containerised deployments with Docker Compose or Kubernetes for consistent, reproducible environments across dev and production.",
        },
        {
          icon: "🔄",
          title: "CI/CD Pipelines",
          description: "Automated testing and deployment with GitHub Actions or GitLab CI — push to main and your app deploys automatically.",
        },
        {
          icon: "☁️",
          title: "AWS & GCP Managed",
          description: "EC2, ECS, Lambda, Cloud Run, App Engine — we provision and manage the right cloud infrastructure for your workload.",
        },
        {
          icon: "📈",
          title: "Auto-Scaling",
          description: "Your app scales up under traffic and scales down to save cost. Load balancers and auto-scaling groups configured properly.",
        },
        {
          icon: "🔍",
          title: "Observability Stack",
          description: "Logging, metrics (Datadog / Prometheus), and error tracking (Sentry) — full visibility into your running app.",
        },
        {
          icon: "🗄️",
          title: "Managed Databases",
          description: "RDS PostgreSQL, MongoDB Atlas, Redis ElastiCache — managed database instances with automated backups and failover.",
        },
      ]}
      process={[
        { step: 1, title: "Architecture Review", description: "We assess your app and design the right infrastructure for your scale and budget." },
        { step: 2, title: "Infra Setup", description: "Cloud resources provisioned with Terraform or CloudFormation — reproducible and documented." },
        { step: 3, title: "CI/CD Pipeline", description: "Automated build, test, and deploy pipeline configured in your git repository." },
        { step: 4, title: "Observability", description: "Logging, alerting, and dashboards set up before go-live." },
        { step: 5, title: "Handover & Support", description: "Runbook documentation provided and ongoing managed support available." },
      ]}
      pricingTitle="Full-Stack Hosting Plans"
      pricing={[
        {
          name: "Startup",
          price: 49,
          period: "mo",
          description: "For early-stage apps and MVPs.",
          features: [
            "Single server deployment",
            "Docker or Node/Python direct",
            "CI/CD pipeline setup",
            "Daily backups",
            "Basic monitoring & alerts",
            "Managed PostgreSQL (shared)",
            "SSL & custom domain",
          ],
          cta: "Get Started",
        },
        {
          name: "Production",
          price: 149,
          period: "mo",
          description: "Production-grade infrastructure for live applications.",
          features: [
            "Multi-server / ECS deployment",
            "Auto-scaling group",
            "Load balancer (ALB)",
            "Managed RDS database",
            "Redis cache layer",
            "Full observability stack",
            "24/7 incident response",
            "Monthly architecture review",
          ],
          cta: "Get Started",
          highlighted: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "High-availability infrastructure for serious applications.",
          features: [
            "Multi-region deployment",
            "Kubernetes (EKS / GKE)",
            "Zero-downtime deployments",
            "Disaster recovery setup",
            "SOC 2 compatible architecture",
            "Dedicated DevOps engineer",
            "SLA-backed response times",
          ],
          cta: "Contact Us",
        },
      ]}
      faq={[
        {
          question: "What languages and frameworks do you support?",
          answer: "Node.js, Python, Go, Ruby on Rails, PHP, and any Docker-containerised application. We also support serverless with AWS Lambda and Vercel.",
        },
        {
          question: "Do I need my own AWS or GCP account?",
          answer: "We can deploy to your existing cloud account or set one up for you. We recommend client-owned accounts for maximum portability.",
        },
        {
          question: "Can you migrate my existing app to better infrastructure?",
          answer: "Yes — we specialise in infrastructure migrations, moving applications from VPS or poorly-architected setups to proper managed infrastructure.",
        },
      ]}
      ctaTitle="Let's get your app on solid infrastructure"
      ctaSubtitle="Tell us about your stack and we'll design the right hosting architecture."
    />
  );
}
