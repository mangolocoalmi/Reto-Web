const mongoose = require("mongoose");

const tempsSchema = new mongoose.Schema({
    temperatura: Number,
    humedad: Number,
    fecha: Date
  });
  
  module.exports = mongoose.model("temperatura", tempsSchema);
   