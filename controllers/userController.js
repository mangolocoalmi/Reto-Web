const bcrypt = require("bcryptjs");
const Usuario = require('../model/usuario')

exports.registroWeb = async (req, res) => {
  res.render("registro", { page: "Registro", menuId: "registro" });
}

exports.registro = async (req, res) => {
  console.log(req.body);
 try {
  // Get user input
  const { email, username, password } = req.body;

  // Validate user input
  if (!(email && password && username)) {
    res.status(400).send("All input is required");
  }
  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await Usuario.findOne({ username });
    if (oldUser) {
      return res.status(409).send("User Already Exist.");
    }
  
  encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await Usuario.create({
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    username,
    password: encryptedPassword,
  });  

  // return new user
  res.status(201).json(user);

  } catch (error) {
      console.log(error)
  }
}

exports.loginWeb = async (req, res) => {
  res.render("login", { page: "Login", menuId: "login" });
}

exports.login = async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

  if (username && password) {
    const user = await Usuario.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log(req.session)
      // req.session.loggedin = true;
			// req.session.username = username;
    } else {
      res.status(400).send("Invalid Credentials")
    }
  } else {
		res.send('Please enter Username and Password!');
		res.end();
  }
}

exports.adminok = async (req, res) => {
  console.log(req.session)
  if (typeof req.session !== 'undefined') {
    if (req.session.loggedin) {
      res.render("dashboard", { page: req.session.username , menuId: "admin" });
    } else {
      res.send('Please login to view this page!');
    } 
  }
	res.end();
}