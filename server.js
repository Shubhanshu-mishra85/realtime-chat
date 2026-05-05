const express = require("express");
const http = require("http");

const {Server} = require("socket.io");
const mysql = require("mysql2");
const { connect } = require("http2");
const { Socket } = require("dgram");


const app = express();
const server = http.createServer(app);
const io = new Server(server);

//database say connection k liya
//username and password -- muit
const db = mysql.createConnection({
host: "localhost",
user: "muit",
password: "muit",
database: "chatApp"
});

db.connect(err =>{
    if(err) throw err;
    console.log("Mysql connected");
});

//server static file 

app.use(express.static("public"));

//socket.io
io.on("connection", (socket)=>{
    console.log("User connected");

    socket.on("Chat message", (msg)=>{
        //save message
        db.query("Insert into message", [msg]);

        //broadcast messgae
        io.emit("chat message", msg);
    });

    socket.on("disconnect", ()=>{
        console.log("User disconnected");
    });
});

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
