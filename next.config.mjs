/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ulnzftznhgmkvvmfeckb.supabase.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  output: "standalone",
};

export default nextConfig;
