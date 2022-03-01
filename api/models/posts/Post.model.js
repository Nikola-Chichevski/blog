const { Sequelize } = require('sequelize');
const db = require('../../common/database/db.config');
const Category = require('../categories/Category.model');

const Post = db.define('post', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: 'post'
})

Post.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Post;