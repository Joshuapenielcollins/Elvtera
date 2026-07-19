import type { NextConfig } from "next";

/**
 * Next.js configuration for the ELVTERA E-Solutions website.
 * The site is fully static-friendly: every page is a Server Component
 * rendered at build time for optimal Core Web Vitals.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
