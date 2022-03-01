const { Sequelize } = require('sequelize');
const db = require('../../common/database/db.config');
const bcrypt = require('bcrypt');

const User = db.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'user'
})

module.exports = User;