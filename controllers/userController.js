const bcrypt = require("bcryptjs");
const Usuario = require('../model/usuario')

exports.registro = async (req, res) => {
  console.log(req.body);
 try {
  const { email, username, password } = req.body;

  if (!(email && password && username)) {
    res.status(400).send("All input is required");
  }
  const oldUser = await Usuario.findOne({ username });
    if (oldUser) {
      return res.status(409).send("User Already Exist.");
    }
  
  encryptedPassword = await bcrypt.hash(password, 10);

  const user = await Usuario.create({
    email: email.toLowerCase(), 
    username,
    password: encryptedPassword,
  });  

  res.status(201).json(user);
  } catch (error) {
    console.log(error)
  }
}

exports.login = async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

  if (username && password) {
    const user = await Usuario.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.loggedin = true;
			req.session.username = username;
      res.redirect("/admin");
    } else {
      res.status(400).send("Invalid Credentials")
    }
  } else {
		res.send('Please enter Username and Password!');
		res.end();
  }
}