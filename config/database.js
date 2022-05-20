const mongoose = require("mongoose");

async function conectarBD() {
  await mongoose.connect("mongodb+srv://mangoloco1:Almi1234@mangoloco.itq5u.mongodb.net/RetoDB?retryWrites=true&w=majority");
  console.log('Conexion a la base de datos bien')
}

module.exports.conectarBD = conectarBD;