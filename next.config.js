/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sejutacita.id'],
  },
};

module.exports = nextConfig;


// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination:
//           'https://asia-southeast2-sejutacita-app.cloudfunctions.net/:path*',
//       },
//     ];
//   },
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['sejutacita.id'],
//   },
// };

// module.exports = nextConfig;
