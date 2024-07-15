/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/app/api/auth/:path*", // 요청 경로 설정
        destination: "/api/auth/[...nextauth]/route.ts", // 실제 파일 경로
      },
    ];
  },
};

export default nextConfig;
