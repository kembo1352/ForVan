const router = require("express").Router();
const post = require("../model/post");

router.put("/updatePost", async function (req, res) {
  console.log("haha");
  var foundPost = await post.findOne({ _id: req.body.postId }).exec();
  if (foundPost) {
    const updatePost = await post.findOneAndUpdate(
      { _id: req.body.postId },
      {
        title: req.body.newTitle,
        postPreview: req.body.newPostPreview,
        previewImage: req.body.newImagePreview,
        content: req.body.newContent,
      }
    );
  }
});

module.exports = router;
