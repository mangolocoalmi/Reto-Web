const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://mangoloco1:Almi1234@mangoloco.itq5u.mongodb.net/RetoDB?retryWrites=true&w=majority";

async function conectarBD() {
  await mongoose.connect("mongodb+srv://mangoloco1:Almi1234@mangoloco.itq5u.mongodb.net/RetoDB?retryWrites=true&w=majority");
  console.log('Conexion a la base de datos bien')
}

const client = new MongoClient(uri);

async function run() {
  await client.connect();
  console.log("Connected successfully to server");
  // try {
  //   // Connect the client to the server

  //   client.db('RetoDB');
  //   // const collection = db.collection("temperaturas");
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}



// Mongoose
module.exports.conectarBD = conectarBD;
// MongoDB
module.exports.run = run;
// module.exports.client = client;