const express = require("express");
const {
  updatePost,
  createPost,
  readPost,
  deletePost,
} = require("../controllers/postController");
const middleware = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/update/:postId", middleware, updatePost);
router.get("/read", readPost);
router.delete("/delete/:postId", middleware, deletePost);
router.post("/create", middleware, createPost);

module.exports = router;
