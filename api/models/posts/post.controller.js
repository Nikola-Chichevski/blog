const PostService = require('./post.service');

class PostController {
    static async getAllPosts(req, res, next) {
        try {
            const posts = await PostService.getAllPosts();
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createPost(req, res, next) {
        try {
            const createdPost = await PostService.createPost(req.body);
            res.status(201).json(createdPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PostController;