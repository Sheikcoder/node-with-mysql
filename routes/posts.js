const express = require('express');
const PostController = require("../controllers/post.controllers");
const router = express.Router();

// Define a POST route to handle saving posts
router.post("/", PostController.save);
router.get("/:id", PostController.show);
router.get("/", PostController.index);
router.patch("/:id", PostController.update);
router.delete("/:id", PostController.delet);

module.exports = router;    
