const bcrypt = require("bcryptjs");
const Usuario = require('../model/usuario')

exports.crear_usuario = async (req, res) => {
  try {
  // Get user input
  const { nombre, email, usuario, password } = req.body;

  // Validate user input
  if (!(email && password && nombre && usuario)) {
    res.status(400).send("All input is required");
  }
  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await Usuario.findOne({ usuario });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
  
  encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await Usuario.create({
    nombre,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    usuario,
    password: encryptedPassword,
  });  

  // return new user
  res.status(201).json(user);  

  } catch (error) {
      console.log(error)
  }
}