const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session')
const database = require('./config/database');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

database.conectarBD();
//Definimos la carpeta de contenido estático
app.use(session({
	secret: 'mangoloco',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

//Necesario para parsear objetos JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs', { page: 'Inicio', menuId: 'inicio' });
});

app.set('view engine', 'ejs');

const rutas = require('./routes/rutas')
app.use('/', rutas)

server.listen(3000, () => {
    console.log(`Server listo en *:${3000}`);
});