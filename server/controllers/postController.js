const Post = require("../models/postModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc create new post & return token
//@route POST /api/user/create
//@access public
const createPost = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, desc, image } = req.body;
    const newPost = await Post.create({ title, desc, image, owner: userId });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

//@desc read  post
//@route GET /api/user/read
//@access public
const readPost = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("owner", "-password");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

//@desc delete post
//@route DELETE /api/user/delete
//@access public
const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

//@desc update post
//@route PUT /api/user/update
//@access public
const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

module.exports = { createPost, readPost, deletePost, updatePost };
