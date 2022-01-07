const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const clubsSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
  },
  name: {
    type: String,
  },
  rank: {
    type: String,
  },
  logo_url: {
    type: String,
  },
  logo: {
    type: String,
  },
  kit_url: {
    type: String,
  },
  highlight_title: {
    type: String,
  },
});

module.exports = mongoose.model("club", clubsSchema);
