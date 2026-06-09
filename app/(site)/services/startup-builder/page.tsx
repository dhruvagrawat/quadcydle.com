import { Metadata } from "next";
import StartupBuilderClient from "./StartupBuilderClient";

export const metadata: Metadata = {
  title: "Startup Builder Package — Everything to Launch Your Business | Quadcydle",
  description:
    "The all-in-one package for new businesses: website, branding, business email, hosting, app setup, company registration guidance, and AWS credits.",
};

export default function StartupBuilderPage() {
  return <StartupBuilderClient />;
}
