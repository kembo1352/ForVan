const router = require("express").Router();
const post = require("../model/post");
const authUser = require("../model/authUser");
const mongoose = require("mongoose");

router.get("/posts", async (req, res) => {
  console.log("hihi");
  mongoose
    .model("post")
    .aggregate([
      {
        $lookup: {
          from: "authusers",
          localField: "author",
          foreignField: "_id",
          as: "authorInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        console.log(result);
        return;
      }
    });
});

router.get("/eachpost", async (req, res) => {
  console.log(req.query.id);
  mongoose
    .model("post")
    .aggregate([
      {
        $lookup: {
          from: "authusers",
          localField: "author",
          foreignField: "_id",
          as: "authorInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const foundPost = result.filter(
          (el) => el._id.toString() === req.query.id
        );
        res.send(foundPost);
        console.log(foundPost);
        return;
      }
    });
});

module.exports = router;

// var foundPost = await post.findOne({ _id: req.query.id }).exec();
// if (foundPost) {
//   res.send(foundPost);
// }
