const { Sequelize } = require("../../common/database/db.config");
const Post = require("./Post.model");
const Category = require('../categories/Category.model');

class PostService {
    static getAllPosts() {
        return Post.findAll({
            include: [{
                model: Category,
                required:true
            }]
        })
    }

    static createPost(data) {
        return Post.create(data);
    }
}
    
module.exports = PostService;
