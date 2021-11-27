const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://p24h8j7h.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;