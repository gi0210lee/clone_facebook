/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "brandlogos.net",
      "links.papareact.com",
      "platform-lookaside.fbxbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
