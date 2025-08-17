/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false, // Disable Strict Mode to prevent double rendering in development
  trailingSlash: true,
};

export default nextConfig;
