const sensor = require('../model/temperaturas');

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
  const Result = await sensor.aggregate([{ $group: { _id: { $dateToString: { format: "%d/%m/%Y", date: "$fecha" } }, tempMax: { $max: "$temperatura" }, tempMin: { $min: "$temperatura" }, }, }, { $sort: { _id: -1 } }, ]);
  res.render('estadisticas', {user: req.session.username, menuId: 'estadisticas', result: Result});
};


