// userModel.js

const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match:
      /^[a-z0-9!#$%&'+/=?^`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

// Create and export the User model
const User = mongoose.model("user", userSchema);
module.exports = User;
