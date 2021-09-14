const { createProxyMiddleware } = require("http-proxy-middleware");
// import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      //target: "http://18.221.197.164:4000",
      //target: "http://52.78.215.99:4000",
      changeOrigin: true,
    })
  );
};
