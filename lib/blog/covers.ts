/** Accent colour per journal category — used for generated covers and share images. */
const colors: Record<string, string> = {
  "Web Design": "#FF5A1F",
  Agency: "#F4C8FF",
  Hosting: "#7C9CFF",
  Maintenance: "#C9F24B",
  "E-commerce": "#FF8A5C",
  "Food & Hospitality": "#FF8A5C",
  SEO: "#C9F24B",
  "Web Performance": "#7C9CFF",
  "Business Tools": "#F4C8FF",
  Mobile: "#7C9CFF",
  WordPress: "#C9F24B",
};

export const categoryColor = (category: string) => colors[category] ?? "#FF5A1F";
