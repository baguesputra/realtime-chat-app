const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_chat_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
