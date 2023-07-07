const express = require("express");
const { register, login, loadUserInfo } = require("../controllers/userController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();
const { body }= require("express-validator")

router.post("/register", body("password").isLength(10), register);
router.post("/login", login);
router.get("/loaduser", middleware, loadUserInfo)

module.exports = router;
