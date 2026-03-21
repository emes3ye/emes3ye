/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/open-to-work",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/leetview/privacy-policy",
        destination: "/products/leetview/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
