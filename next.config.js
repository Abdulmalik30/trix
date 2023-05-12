module.exports = {
  reactStrictMode: true,
  basePath: '',
  i18n: {
    locales: ['en-US', 'fr', 'es'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['example.com'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Origin, X-Requested-With, Content-Type, Accept',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Custom webpack configuration options
    return config;
  },
};
