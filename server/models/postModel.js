// userModel.js

const mongoose = require("mongoose");

// Define the User schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  createdAt:{
    type: Date,
    default: new Date()
  }
});

// Create and export the User model
const Post = mongoose.model("post", postSchema);
module.exports = Post;
