const router = require("express").Router();
const userformation = require("../model/userformation");
const fullPlayers = require("../model/fullPlayers");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
//GET FullPLAYER INFO
router.get("/userformation", async (req, res) => {
  var queryParam = req.query.id;
  mongoose
    .model("userformation")
    .aggregate([
      {
        $lookup: {
          from: "players",
          localField: "playerID",
          foreignField: "_id",
          as: "playerInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result) {
          const foundData = result.filter(
            (element) => element.userID === queryParam
          );
          res.send(foundData);
          console.log(foundData);
          return result;
        }
      }
    });
});

module.exports = router;
