const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: ObjectId,
  },
  title: {
    type: String,
  },
  postPreview: {
    type: String,
  },
  previewImage: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  view: {
    type: String
  }
});

module.exports = mongoose.model("post", postSchema);
