const router = require("express").Router();
const post = require("../model/post");

router.post("/postNewPost", async function (req, res) {
  console.log(req.body.userId);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  const newDoc = new post({
    author: req.body.userId,
    title: req.body.newTitle,
    postPreview: req.body.newPostPreview,
    previewImage: req.body.newPreviewImage,
    content: req.body.newPostContent,
    view: "0",
    updatedAt: dateTime,
  });

  try {
    newDoc.save();
    res.send({ newDoc: newDoc });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
