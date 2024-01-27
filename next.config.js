// TypeScript type annotation for Next.js configuration
/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    // ... any other Next.js configurations
    async headers() {
      return [
        {
          source: '/fonts/:font*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };

  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      ...nextConfig,
      ...defaultConfig,
      webpack(config, options) {
        if (!options.isServer) {
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: true,
            })
          );
        }

        return config;
      },
    };
  }

  // Merge the additional image configuration into nextConfig
  // Uncomment and customize this section if needed
  // nextConfig.images = {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.ctfassets.net',
  //     },
  //   ],
  // };

  return nextConfig;
};
