const router = require("express").Router();
const player = require("../model/player");
const mongoose = require("mongoose");

//GET FullPLAYER INFO
router.get("/fullplayer", async (req, res) => {
  player.find().then((foundPlayers) => res.json(foundPlayers));
});

router.get("/each-player", async (req, res) => {
  var foundPlayer = await player.findOne({ _id: req.query.id }).exec();
  if (foundPlayer) {
    res.send(foundPlayer);
  }
});

router.get("/each-player-1", async (req, res) => {
  mongoose
    .model("player")
    .aggregate([
      {
        $lookup: {
          from: "clubs",
          localField: "club",
          foreignField: "name",
          as: "clubInfo",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        const foundPlayer = result.filter(
          (el) => el._id.toString() === req.query.id
        );
        console.log(foundPlayer);
        res.send(foundPlayer);
        return;
      }
    });
});

router.put("/edit-player", async function (req, res) {
  const HaNoiKit = "/jersey/hanoi.png";
  const HAGLKit = "/jersey/hagl.png";
  const ViettelKit = "/jersey/viettel.png";
  const TQNKit = "/jersey/thanquangninh.png";
  const DNKit = "/jersey/danang.png";
  const HaNoiLogo =
    "https://drive.google.com/uc?id=1mCdcX26FxdYbAAi-4rmdcZ1aFpppaXuP";
  const HAGLLogo =
    "https://drive.google.com/uc?id=1M0GiFOx7HT3ppsMIeAsXS5SN_Fx2-V-4";
  const ViettelLogo =
    "https://drive.google.com/uc?id=1wyJKjyxsIjYO-tekNWzsxKL3oEaSi8-J";
  const TQNLogo =
    "https://drive.google.com/uc?id=1TEePXp5tAWK4IDk7WCE0_ItTun5-3XLB";
  const DNLogo =
    "https://drive.google.com/uc?id=1JTq27g7iJ2LBmws0ggcHGyC0cAQ4lyMK";
  var foundPlayer = await player.findOne({ _id: req.body.playerID }).exec();
  if (foundPlayer && req.body.newClub === "Ha Noi FC") {
    const updateUser = await player.findOneAndUpdate(
      {
        _id: req.body.playerID,
      },
      {
        name: req.body.newName,
        short_name: req.body.newShortName,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        shirt_number: req.body.newShirtNumber,
        avatar: req.body.newAvatar,
        position: req.body.newPosition,
        age: req.body.newAge,
        value: req.body.newValue,
        performance: req.body.newPerformance,
        goal: req.body.newGoal,
        strong_foot: req.body.newStrongFoot,
        assist: req.body.newAssist,
        club: "Ha Noi FC",
        club_url: HaNoiLogo,
        point: req.body.newPoint,
        kit: HaNoiKit,
      }
    );
  }
  if (foundPlayer && req.body.newClub === "Hoang Anh Gia Lai FC") {
    const updateUser = await player.findOneAndUpdate(
      {
        _id: req.body.playerID,
      },
      {
        name: req.body.newName,
        short_name: req.body.newShortName,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        shirt_number: req.body.newShirtNumber,
        avatar: req.body.newAvatar,
        position: req.body.newPosition,
        age: req.body.newAge,
        value: req.body.newValue,
        performance: req.body.newPerformance,
        goal: req.body.newGoal,
        strong_foot: req.body.newStrongFoot,
        assist: req.body.newAssist,
        club: "HAGL",
        club_url: HAGLLogo,
        point: req.body.newPoint,
        kit: HAGLKit,
      }
    );
  }
  if (foundPlayer && req.body.newClub === "Viettel FC") {
    const updateUser = await player.findOneAndUpdate(
      {
        _id: req.body.playerID,
      },
      {
        name: req.body.newName,
        short_name: req.body.newShortName,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        shirt_number: req.body.newShirtNumber,
        avatar: req.body.newAvatar,
        position: req.body.newPosition,
        age: req.body.newAge,
        value: req.body.newValue,
        performance: req.body.newPerformance,
        goal: req.body.newGoal,
        strong_foot: req.body.newStrongFoot,
        assist: req.body.newAssist,
        club: "Viettel FC",
        club_url: ViettelLogo,
        point: req.body.newPoint,
        kit: ViettelKit,
      }
    );
  }
  if (foundPlayer && req.body.newClub === "Than Quang Ninh") {
    const updateUser = await player.findOneAndUpdate(
      {
        _id: req.body.playerID,
      },
      {
        name: req.body.newName,
        short_name: req.body.newShortName,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        shirt_number: req.body.newShirtNumber,
        avatar: req.body.newAvatar,
        position: req.body.newPosition,
        age: req.body.newAge,
        value: req.body.newValue,
        performance: req.body.newPerformance,
        goal: req.body.newGoal,
        strong_foot: req.body.newStrongFoot,
        assist: req.body.newAssist,
        club: "TQN",
        club_url: TQNLogo,
        point: req.body.newPoint,
        kit: TQNKit,
      }
    );
  }
  if (foundPlayer && req.body.newClub === "Da Nang FC") {
    const updateUser = await player.findOneAndUpdate(
      {
        _id: req.body.playerID,
      },
      {
        name: req.body.newName,
        short_name: req.body.newShortName,
        nation: "Viet Nam",
        nation_url: "/uploads/VietNam.png",
        shirt_number: req.body.newShirtNumber,
        avatar: req.body.newAvatar,
        position: req.body.newPosition,
        age: req.body.newAge,
        value: req.body.newValue,
        performance: req.body.newPerformance,
        goal: req.body.newGoal,
        strong_foot: req.body.newStrongFoot,
        assist: req.body.newAssist,
        club: "Da Nang FC",
        club_url: DNLogo,
        point: req.body.newPoint,
        kit: DNKit,
      }
    );
  }
});

router.post("/delete-player", async function (req, res) {
  console.log(req.body.playerID);
  const deletePlayer = await player
    .findOneAndDelete({ _id: req.body.playerID })
    .exec();
});

module.exports = router;
