const router = require("express").Router();
const club = require("../model/club");

router.get("/view-all-club", async function (req, res) {
  const clubs = await club.find().exec();
  if (clubs) {
    res.send(clubs);
    console.log(clubs);
  }
});

router.get("/each-club", async function (req, res) {
  const selectedClub = await club.findOne({ _id: req.query.id }).exec();
  if (selectedClub) {
    res.send(selectedClub);
    console.log(selectedClub);
  }
});

router.put("/edit-club", async function (req, res) {
  console.log("hihi");
  var foundClub = await club.findOne({ _id: req.body.clubID }).exec();
  if (foundClub) {
    const updateClub = await club.findOneAndReplace(
      {
        _id: req.body.clubID,
      },
      {
        _id: req.body.clubID,
        name: req.body.newName,
        rank: req.body.newRank,
        logo: req.body.newLogo,
        kit_url: req.body.newKit,
        highlight_title: req.body.newTitle,
      }
    );
  }
});

module.exports = router;
