/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/open-to-work",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
