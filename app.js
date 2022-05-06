const express = require("express");
const puerto = 3000
//const database = require('./config/database');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(puerto, () => {
    console.log(`Server listo en http://localhost:${puerto}`);
});

module.exports = app;