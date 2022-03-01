const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Blog', 'postgres', 'Nikola123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: true,
});