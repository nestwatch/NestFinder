/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    // ...other Next.js config settings...
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'next-babel-loader',
            options: {
              isServer,
              hasReactRefresh: false,
              // ...other options...
            },
          },
        });
      }
  
      return config;
    },
  };
  