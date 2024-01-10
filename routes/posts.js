const express = require('express');
const PostController = require("../controllers/post.controllers");
const checkAuthMiddleware = require ("../middleware/check-auth");


const router = express.Router();
router.post("/", checkAuthMiddleware.checkAuth , PostController.save);
router.get("/:id", PostController.show);
router.get("/", PostController.index);
router.patch("/:id", checkAuthMiddleware.checkAuth ,PostController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth ,PostController.delet);

module.exports = router;     
