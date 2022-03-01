const router = require('express').Router();
const PostController = require('./post.controller');

router.get('', PostController.getAllPosts) 
router.post('/add-post', PostController.createPost);

module.exports = router;