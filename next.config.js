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
      test: /\.svg$/, //정확히 'kakao-feed.svg'에 대해서만 svg 컴포넌트화 하는 webpack 적용
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
