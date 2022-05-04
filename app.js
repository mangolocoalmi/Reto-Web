const express = require("express");
const database = require('./config/database')
const app = express();

app.use(express.json());

database.conectarBD()
    .catch((error) => {
        console.log('Hubo algun error en la conexion a la BD')
        console.error(error)
        process.exit(1)
    })




// Aqui cosa

module.exports = app;