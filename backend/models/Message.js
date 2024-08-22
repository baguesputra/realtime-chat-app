// backend/models/Messages.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Message = sequelize.define('Message', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Define associations
Message.belongsTo(User, { foreignKey: 'userId'});

module.exports = Message;