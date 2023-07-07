const express = require("express");
const { updatePost, createPost, readPost, deletePost } = require("../controllers/postController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.put("/update", middleware, updatePost);
router.get("/read", readPost);
router.delete("/delete", middleware, deletePost);
router.post("/create", middleware, createPost);

module.exports = router;
