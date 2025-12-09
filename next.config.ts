// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const nextConfig = {
  output: '',
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;