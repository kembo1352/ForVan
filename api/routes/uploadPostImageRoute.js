const router = require("express").Router();
var multipart = require("connect-multiparty");
const MultipartyMiddleware = multipart({ uploadDir: "./postImage" });

router.post("/uploadPostImage", MultipartyMiddleware, (req, res) => {
  console.log(req.files.upload);
});

module.exports = router;
