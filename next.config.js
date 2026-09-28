/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Old template pages removed in the redesign — send any saved links or
  // indexed URLs to the closest real page instead of a 404.
  async redirects() {
    return [
      { source: "/blog/blog-details", destination: "/blog", permanent: true },
      { source: "/uicomponents", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
