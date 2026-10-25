
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.get("/js/pb/urls.js", (req, res, next) => {
  req.url = "/js/pb/urls.js";
  next();
});

app.use(
  "/",
  createProxyMiddleware({
    target: "https://truffled.lol",
    changeOrigin: true,
    ws: true,
    pathRewrite: (path) => path,
    followRedirects: true
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
