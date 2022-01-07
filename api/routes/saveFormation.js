const router = require("express").Router();
const userformation = require("../model/userformation");
const authUser = require("../model/authUser");
const mongoose = require("mongoose");

router.put("/saveformation", async function (req, res) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  var playerIds = req.body.data;
  const playerObjIds = playerIds.map((el) => {
    const objIds = mongoose.Types.ObjectId(el);
    return objIds;
  });
  var foundData = await userformation
    .findOne({ userID: req.body.userId })
    .exec();

  if (foundData) {
    const replaceData = await userformation
      .findOneAndReplace(
        { userID: req.body.userId },
        {
          userID: req.body.userId,
          playerID: playerObjIds,
          updatedAt: dateTime,
        }
      )
      .exec();

    res.send(foundData);
  } else {
    const newDoc = new userformation({
      userID: req.body.userId,
      playerID: playerObjIds,
      updatedAt: dateTime,
    });

    try {
      newDoc.save();
      res.send({ newDoc: newDoc });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  var players = req.body.newPlayer;

  var playersPointArr = [];
  players.forEach((el) => {
    var interger = parseInt(el.point);
    playersPointArr.push(interger);
  });

  var userPoint = 0;
  playersPointArr.forEach((el) => {
    userPoint = userPoint + el;
  });
  console.log(userPoint);

  var playerValueArr = [];
  players.forEach((el) => {
    var interger = parseInt(el.value);
    playerValueArr.push(interger);
  });

  var userValue = 0;
  playerValueArr.forEach((el) => {
    userValue = userValue + el;
  });
  console.log(userValue);

  var userTotalPoint = userValue + userPoint;

  //Update Turn 1
  var foundUser1 = await authUser.findOne({ _id: req.body.userId }).exec();

  var oldUserInfo1 = foundUser1;

  var newUserPointAndValue = {
    point: userPoint,
    overall_point: oldUserInfo1.overall_point,
    overall_rank: oldUserInfo1.overall_rank,
    gameweek_point: oldUserInfo1.gameweek_point,
    formation_value: userValue,
    totalPoint: userTotalPoint,
  };

  if (foundUser1) {
    const updateUserInfo = await authUser
      .findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { userInfo: newUserPointAndValue }
      )
      .exec();
  }

  //Get User Info
  var userList = await authUser.find().exec();
  // console.log(userList);

  var userInfoArr = [];
  userList.forEach((el) => {
    userInfoArr.push(el.userInfo);
  });

  var userTotalPointArr = [];
  userInfoArr.forEach((el) => {
    var interger = parseInt(el.totalPoint);
    userTotalPointArr.push(interger);
  });

  var rankUser = userTotalPointArr.sort(function (a, b) {
    return b - a;
  });

  console.log(rankUser);

  console.log(userInfoArr);

  console.log(userTotalPoint);

  var rank = userTotalPointArr.indexOf(userTotalPoint) + 1;
  console.log("This is" + rank);

  //Update Turn 2
  var foundUser = await authUser.findOne({ _id: req.body.userId }).exec();

  var oldUserInfo = foundUser;

  var newUserPointAndValue = {
    point: userPoint,
    overall_point: oldUserInfo.overall_point,
    overall_rank: oldUserInfo.overall_rank,
    gameweek_point: oldUserInfo.gameweek_point,
    formation_value: userValue,
    totalPoint: userTotalPoint,
    rank: rank,
  };

  if (foundUser) {
    const updateUserInfo = await authUser
      .findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { userInfo: newUserPointAndValue }
      )
      .exec();
  }
});

module.exports = router;
