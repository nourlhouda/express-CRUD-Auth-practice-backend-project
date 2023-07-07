const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

//@desc register new user & return token
//@route POST /api/user/register
//@access public
const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.json({ msg: "user created", token });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

//@desc login  user & create token
//@route POST /api/user/login
//@access public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({
      email: { $regex: new RegExp(email, "i") },
    });
    if (!existUser)
      return res.status(404).json({ msg: "you should register first." });
    const verifyPassword = await bcrypt.compare(password, existUser.password);
    if (!verifyPassword)
      return res.status(401).json({ msg: "wrong password." });
    const token = jwt.sign(
      { id: existUser._id, email: existUser.email },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

//@desc ffind user by token Id & load its info
//@route GET /api/user/loadUserInfo
//@access private
const loadUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: `something went wrong ${error}` });
  }
};

module.exports = { register, login, loadUserInfo };
