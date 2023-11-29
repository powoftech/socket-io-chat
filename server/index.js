const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("user connected");

	socket.on("on-chat", (data) => {
        io.emit("user-chat", data);
	});
});

server.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
