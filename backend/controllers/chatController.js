// backend/controller/chatController.js

const Message = require('../models/Message');
const User = require('../models/User');

exports.saveMessage = async (content, userId) => {
    try {
        await Message.create({ content, userId });
    } catch (error) {
        console.error('Failed to save message:', error);
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll({ include: [User], order: [['createdAt', 'ASC']] });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};