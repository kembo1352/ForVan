const router = require("express").Router();
const post = require("../model/post");

router.post("/delete-post", async function (req, res) {
    console.log(req.body.postId);
    const deletePost = await post
      .findOneAndDelete({ _id: req.body.postId })
      .exec();
  });

  module.exports = router;