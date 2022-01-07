const router = require("express").Router();
const player = require("../model/player");

router.post("/create-new-player", async function (req, res) {
  const HaNoiKit = "/jersey/hanoi.png";
  const HAGLKit = "/jersey/hagl.png";
  const ViettelKit = "/jersey/viettel.png";
  const TQNKit = "/jersey/thanquangninh.png";
  const DNKit = "/jersey/danang.png";
  const nation =
    "https://drive.google.com/uc?id=1EejLsBkKwg37z2543aiLl43JZ_D-6ymL";
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

  if (req.body.selectClub === "Ha Noi FC") {
    const newPlayer = new player({
      name: req.body.name,
      short_name: req.body.shortName,
      nation: "Viet Nam",
      nation_url:
      "/uploads/VietNam.png",
      shirt_number: req.body.shirtNumber,
      avatar: req.body.newAvatar,
      position: req.body.position,
      age: req.body.age,
      value: req.body.value,
      performance: req.body.performance,
      goal: req.body.goal,
      strong_foot: req.body.strongFoot,
      assist: req.body.assist,
      club: "Ha Noi FC",
      club_url:
        "https://drive.google.com/uc?id=1mCdcX26FxdYbAAi-4rmdcZ1aFpppaXuP",
      point: req.body.point,
      kit: "/jersey/hanoi.png",
    });
    try {
      newPlayer.save();
      res.send({ newPlayer: newPlayer });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (req.body.selectClub === "Hoang Anh Gia Lai FC") {
    const newPlayer = new player({
      name: req.body.name,
      short_name: req.body.shortName,
      nation: "Viet Nam",
      nation_url: "/uploads/VietNam.png",
      shirt_number: req.body.shirtNumber,
      avatar: req.body.newAvatar,
      position: req.body.position,
      age: req.body.age,
      value: req.body.value,
      performance: req.body.performance,
      goal: req.body.goal,
      strong_foot: req.body.stronFoot,
      assist: req.body.assist,
      club: "HAGL",
      club_url: HAGLLogo,
      point: req.body.point,
      kit: HAGLKit,
    });
    try {
      newPlayer.save();
      res.send({ newPlayer: newPlayer });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (req.body.selectClub === "Viettel FC") {
    const newPlayer = new player({
      name: req.body.name,
      short_name: req.body.shortName,
      nation: "/uploads/VietNam.png",
      nation_url: nation,
      shirt_number: req.body.shirtNumber,
      avatar: req.body.newAvatar,
      position: req.body.position,
      age: req.body.age,
      value: req.body.value,
      performance: req.body.performance,
      goal: req.body.goal,
      strong_foot: req.body.stronFoot,
      assist: req.body.assist,
      club: "Viettel FC",
      club_url: ViettelLogo,
      point: req.body.point,
      kit: ViettelKit,
    });
    try {
      newPlayer.save();
      res.send({ newPlayer: newPlayer });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (req.body.selectClub === "Than Quang Ninh") {
    const newPlayer = new player({
      name: req.body.name,
      short_name: req.body.shortName,
      nation: "Viet Nam",
      nation_url: "/uploads/VietNam.png",
      shirt_number: req.body.shirtNumber,
      avatar: req.body.newAvatar,
      position: req.body.position,
      age: req.body.age,
      value: req.body.value,
      performance: req.body.performance,
      goal: req.body.goal,
      strong_foot: req.body.stronFoot,
      assist: req.body.assist,
      club: "TQN",
      club_url: TQNLogo,
      point: req.body.point,
      kit: TQNKit,
    });
    try {
      newPlayer.save();
      res.send({ newPlayer: newPlayer });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  if (req.body.selectClub === "Da Nang FC") {
    const newPlayer = new player({
      name: req.body.name,
      short_name: req.body.shortName,
      nation: "Viet Nam",
      nation_url: "/uploads/VietNam.png",
      shirt_number: req.body.shirtNumber,
      avatar: req.body.newAvatar,
      position: req.body.position,
      age: req.body.age,
      value: req.body.value,
      performance: req.body.performance,
      goal: req.body.goal,
      strong_foot: req.body.stronFoot,
      assist: req.body.assist,
      club: "Da Nang FC",
      club_url: DNLogo,
      point: req.body.point,
      kit: DNKit,
    });
    try {
      newPlayer.save();
      res.send({ newPlayer: newPlayer });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

module.exports = router;
