/** @type {import('next').NextConfig} */
const nextConfig = {};

export async function rewrites() {
  return [
    {
      source: "/app/api/auth/:path*",
      destination: "/api/auth/[...nextauth]/route.ts",
    },
  ];
}

export default nextConfig;
