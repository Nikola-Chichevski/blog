const { Sequelize } = require('sequelize');
const db = require('../../common/database/db.config');

const Category = db.define('category', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: 'category',
})

module.exports = Category;