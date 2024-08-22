Real-Time Chat Application

A real-time chat application built with a Node.js backend and a Next.js frontend. Users can register, log in, send messages, and view chat history. The application features a modern UI inspired by popular messaging apps like WhatsApp and Telegram.
Features

    Real-Time Messaging: Instant message delivery using Socket.io.
    User Authentication: Register and log in to start chatting.
    Message Storage: Chat history is stored in a MySQL database.

Technologies Used

    Frontend: Next.js
    Backend: Node.js, Express.js
    Real-Time Communication: Socket.io
    Database: MySQL
    ORM: Sequelize

Installation
Prerequisites

    Node.js
    MySQL

Backend Setup

    Navigate to the backend directory:

    bash

cd backend

Install dependencies:

bash

npm install

Configure your MySQL database:

    Create a .env file in the backend directory.

    Add your database configuration:

    env

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=chatapp

Run database migrations:

bash

npx sequelize-cli db:migrate

Start the backend server:

bash

    npm start

Frontend Setup

    Navigate to the frontend directory:

    bash

cd frontend

Install dependencies:

bash

npm install

Start the Next.js development server:

bash

    npm run dev

Usage

    Open the application in your browser at http://localhost:3000.
    Register a new account or log in if you already have an account.
    Start chatting with other users in real-time.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

Contact

For any questions or feedback, please contact baguesputratawaqqal@gmail.com.
