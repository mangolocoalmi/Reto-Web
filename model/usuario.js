const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  usuario: String,
  password: String,  
});

module.exports = mongoose.model("usuario", userSchema);
