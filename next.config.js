/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "link.papareact.com",
      "scontent-ssn1-1.xx.fbcdn.net",
      "brandlogos.net",
      "links.papareact.com",
      "platform-lookaside.fbxbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
