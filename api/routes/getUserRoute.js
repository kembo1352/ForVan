const router = require("express").Router();
const authUser = require("../model/authUser");
const mongoose = require("mongoose");
const club = require("../model/club");

//GET PLAYER INFO
router.get("/userinfo", async (req, res) => {
  var queryParam = req.query.id;
  console.log(queryParam);
  mongoose
    .model("authUser")
    .aggregate([
      {
        $lookup: {
          from: "clubs",
          localField: "fav_club",
          foreignField: "_id",
          as: "clubInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const foundUser = result.filter(
          (element) => element._id.toString() === queryParam
        );
        res.send(foundUser);
        console.log(foundUser);
        return;
      }
    });
});

router.get("/user-point", async (req, res) => {
  var userList = await authUser.find().exec();
  // console.log(userList);

  var userInfoArr = [];
  userList.forEach((el) => {
    userInfoArr.push(el.userInfo);
  });

  var userList = await authUser.find().exec();
  // console.log(userList);

  var userInfoArr = [];
  userList.forEach((el) => {
    userInfoArr.push(el.userInfo);
  });
  
});

router.get("/all-user", async (req, res) => {
  mongoose
    .model("authUser")
    .aggregate([
      {
        $lookup: {
          from: "clubs",
          localField: "fav_club",
          foreignField: "_id",
          as: "clubInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
});

router.get("/each-user", async (req, res) => {
  console.log(req.query.id);
  mongoose
    .model("authUser")
    .aggregate([
      {
        $lookup: {
          from: "clubs",
          localField: "fav_club",
          foreignField: "_id",
          as: "clubInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const foundUser = result.filter(
          (el) => el._id.toString() === req.query.id
        );
        res.send(foundUser);
        console.log(foundUser);
      }
    });
});

router.put("/edit-user", async function (req, res) {
  var foundClub = await club.findOne({ name: req.body.newClub }).exec();
  console.log(foundClub._id);
  var foundUser = await authUser.findOne({ _id: req.body.userID }).exec();
  console.log(foundUser);
  if (foundUser) {
    const updateUser = await authUser.findOneAndUpdate(
      {
        _id: req.body.userID,
      },
      {
        name: req.body.newName,
        avatar: req.body.newAvatar,
        lastName: req.body.newLastName,
        firstName: req.body.newFirstName,
        mobile: req.body.newMobile,
        address: req.body.newAddress,
        email: req.body.newEmail,
        password: req.body.newPassword,
        fav_club: foundClub._id,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        userInfo: req.body.newUserInfo,
      }
    );
  }
});

router.post("/delete-user", async function (req, res) {
  console.log(req.body.userID);
  const deleteUser = await authUser
    .findOneAndDelete({ _id: req.body.userID })
    .exec();
});

module.exports = router;
