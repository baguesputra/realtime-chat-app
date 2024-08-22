// backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const { saveMessage } = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Test the server
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Use routes
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

// Handle socket connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Listen for incoming messages
  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
    saveMessage(message.content, message.userId);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Sync with the database and start the server
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
