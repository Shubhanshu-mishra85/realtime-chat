# 💬 Real-Time Chat Application

## 📌 Overview

This project is a real-time chat application built using HTML, JavaScript, Node.js, and MySQL. It allows multiple users to send and receive messages instantly using WebSocket technology.

---

## 🚀 Features

* Real-time messaging
* Multiple users support
* Messages stored in database
* Simple and clean UI
* Fast communication using WebSockets

---

## 🛠️ Technologies Used

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express
* Real-time Communication: Socket.IO
* Database: MySQL

---

## 📂 Project Structure

chat-app/
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/chat-app.git

### 2. Navigate to project folder

cd chat-app

### 3. Install dependencies

npm install

### 4. Setup MySQL database

Create a database named:
chat_app

Create table:
CREATE TABLE messages (
id INT AUTO_INCREMENT PRIMARY KEY,
text TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 5. Start the server

node server.js

### 6. Open in browser

http://localhost:3000

---

## 📸 How It Works

* User enters a message
* Message is sent to server using Socket.IO
* Server stores message in MySQL
* Server broadcasts message to all connected users instantly

---

## 🔮 Future Improvements

* User authentication (login/signup)
* Private chat (one-to-one messaging)
* Chat rooms
* Typing indicator
* File sharing

---

## 👨‍💻 Author

Your Name

---

## 📄 License

This project is open-source and free to use.
