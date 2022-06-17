const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/searchApi',
    createProxyMiddleware({
      // target: 'http://127.0.0.1:5000/',
     target: 'http://8.134.73.52:5000/', 
     pathRewrite: {
        '^/searchApi':'' //remove /api
      },
      changeOrigin: true,
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://8.134.73.52:5001/',
      // target: 'http://localhost:5001/',
      changeOrigin: true,
      secure: true
    })
  );
};