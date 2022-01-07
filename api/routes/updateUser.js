const router = require("express").Router();
const authUser = require("../model/authUser");
const club = require("../model/club");

router.put("/updateUser", async function (req, res) {
  var foundClub = await club.findOne({ name: req.body.newFavClub }).exec();
  const newClubId = foundClub._id;
  console.log(req.body.newFavClub);
  var foundUser = await authUser.findOne({ _id: req.body.userId }).exec();
  if (foundUser) {
    if (req.body.newAvatar) {
      const updateUserInfo = await authUser.findOneAndUpdate(
        { _id: req.body.userId },
        {
          name: req.body.newAccountName,
          avatar: req.body.newAvatar,
          lastName: req.body.newLastName,
          firstName: req.body.newFirstName,
          mobile: req.body.newMobile,
          address: req.body.newAddress,
          fav_club: newClubId,
        }
      );
    }
    if (!req.body.newAvatar) {
      const updateUserInfo = await authUser.findOneAndUpdate(
        { _id: req.body.userId },
        {
          name: req.body.newAccountName,
          avatar,
          lastName: req.body.newLastName,
          firstName: req.body.newFirstName,
          mobile: req.body.newMobile,
          address: req.body.newAddress,
          fav_club: newClubId,
        }
      );
    }
  }
});

module.exports = router;

// const updateUserInfo = await authUser.findOneAndUpdate(
//   { _id: req.body.userId },
//   {
//     name: req.body.newAccountName,
//     avatar: req.body.newAvatar,
//     lastName: req.body.newLastName,
//     firstName: req.body.newFirstName,
//     mobile: req.body.newMobile,
//     address: req.body.newAddress,
//     fav_club: newClubId,
//   }
// );
