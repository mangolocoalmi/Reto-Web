const mongoose = require("mongoose");

async function conectarBD() {
    await mongoose.connect('mongodb+srv://mangoloco1:Almi1234@mangoloco.itq5u.mongodb.net/RetoDB?retryWrites=true&w=majority')
    console.log('SI')
}

module.exports.conectarBD = conectarBD;