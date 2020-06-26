const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/allUsers", {
            target: "https://react-burger-17b0e.firebaseio.com/",
            changeOrigin: true
        })
    );
};