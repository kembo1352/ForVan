const { string } = require("@hapi/joi");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const userFormationSchema = new mongoose.Schema({
  userID: {
    type: String,
  },
  playerID: {
    type: Array
  },
  updatedAt: {
    type: String,
  }
});

module.exports = mongoose.model('userformation', userFormationSchema)
