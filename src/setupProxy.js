const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://8.134.73.52:5001/',
      // target: 'http://111.230.197.244:7301/',
      pathRewrite: {
        '^/api':'' //remove /api
      },
      changeOrigin: true,
    })
  );
};