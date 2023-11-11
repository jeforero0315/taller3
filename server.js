// server.js
const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    handlePreflightRequest: (req, res) => {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "my-custom-header",
            "Access-Control-Allow-Credentials": true,
        });
        res.end();
    },
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    next();
});

io.on("connection", function(socket) {
    socket.on("newuser", function(username) {
        socket.broadcast.emit("update", username + " joined the conversation");
    });

    socket.on("exituser", function(username) {
        socket.broadcast.emit("update", username + " left the conversation");
    });

    socket.on("chat", function(message) {
        socket.broadcast.emit("chat", message);
    });
});

server.listen(2000, () => {
    console.log('Servidor escuchando en el puerto 2000');
});
