const { client } = require("../config/database");

exports.registroWeb = async (req, res) => {
  res.render("registro", {
    user: req.session.username,
    page: "Registro",
    menuId: "registro",
  });
};

exports.loginWeb = async (req, res) => {
  res.render("login", {
    user: req.session.username,
    page: "Login",
    menuId: "login",
  });
};

exports.getTemps = async (req, res) => {
  // const db = database.main().catch(console.error)
  console.log(client.db().collection('temperaturas').countDocuments());
  // const findResult = client.find({}).toArray();
  // console.log("Found documents =>", findResult);
};


