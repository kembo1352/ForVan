const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
// const fileUpload = require("express-fileupload");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const app = express();

// app.use(fileUpload());

const apiPaths = {
  "/api": {
    target: "http://localhost:3080",
    pathRewrite: {
      "^/api": "/api",
    },
    changeOrigin: true,
  },
};

const isDevelopment = process.env.NODE_ENV !== "production";

app
  .prepare()
  .then(() => {
    const server = express();

    if (isDevelopment) {
      server.use("/api", createProxyMiddleware(apiPaths["/api"]));
    }

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error:::::", err);
  });

// app.post("/uploadImage", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const { file } = req.files;
//   console.log(file);

//   file.mv(`${__dirname}/my-app/public/uploads/${file.name}`, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });
