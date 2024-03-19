// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: {
//         // export 옵션 추가
//         export: {},
//     },
// }

// module.exports = nextConfig

// next.config.js
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
