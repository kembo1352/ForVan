const { string } = require("@hapi/joi");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// const authUserSchema = mongoose.Schema({
//     name: {
//         type:String,
//     },
//     userName: {
//         type:String,
//     },
//     email: {
//         type:String,
//     },
//     password: {
//         type:String,
//     }
// })

const userinfoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  fav_club: {
    type: ObjectId,
  },
  nation: {
    type: String,
  },
  nation_url: {
    type: String,
  },
  userInfo: {
    point: {
      type: String,
    },
    overall_point: {
      type: String,
    },
    overall_rank: {
      type: String,
    },
    gameweek_point: {
      type: String,
    },
    formation_value: {
      type: String,
    },
    totalPoint: {
      type: String,
    },
    rank: {
      type: String,
    },
  },
});

module.exports = mongoose.model("authUser", userinfoSchema);
