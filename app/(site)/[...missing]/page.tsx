import { notFound } from "next/navigation";

// Catch-all for unknown URLs so they render the site's own not-found page
// (inside the header/footer layout) with a real 404 status.
export default function Missing() {
  notFound();
}
