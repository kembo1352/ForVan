const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/updatepoint", async function (req, res) {
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
          const players = foundData[0].playerInfo;
          console.log(players.length);
          var playersArr = [];
          players.forEach((el) => {
            var interger = parseInt(el.point);
            playersArr.push(interger);
          });
          console.log(playersArr);
          var sumPoint = 0;
          playersArr.forEach((el) => {
            sumPoint = sumPoint + el;
          });
          console.log(sumPoint);
          //   players.map((player) => {
          //     const playerPoints = player.points;
          //     res.send(playerPoints);
          //   });
        }
      }
    });
});

module.exports = router;
