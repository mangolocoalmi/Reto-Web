const express = require("express");
//const database = require('./config/database');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

//Definimos la carpeta de contenido estático
app.use(express.static('public'))

//Necesario para parsear objetos JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs', { page: 'Home', menuId: 'home' });
});

app.set('view engine', 'ejs');

const rutas = require('./routes/rutas')
app.use('/', rutas)

server.listen(3000, () => {
    console.log(`Server listo en *:${3000}`);
});