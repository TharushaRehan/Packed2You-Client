/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_SUPABASE_DOMAIN,
      },
    ],
    dangerouslyAllowSVG: true,
  },
  output: "standalone",
};

export default nextConfig;
