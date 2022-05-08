const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  token: String,    
});

module.exports = mongoose.model("Usuario", userSchema);