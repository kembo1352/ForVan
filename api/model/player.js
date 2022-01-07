const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const playerInfoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  short_name: {
    type: String,
  },
  nation_url: {
    type: String,
  },
  shirt_number: {
    type: String,
  },
  avatar: {
    type: String,
  },
  position: {
    type: String,
  },
  age: {
    type: String,
  },
  value: {
    type: String,
  },
  performance: {
    type: String,
  },
  goal: {
    type: String,
  },
  strong_foot: {
    type: String,
  },
  assist: {
    type: String,
  },
  club: {
    type: String,
  },
  club_url: {
    type: String,
  },
  point: {
    type: String,
  },
  kit: {
    type: String,
  },
});

module.exports = mongoose.model("player", playerInfoSchema);
