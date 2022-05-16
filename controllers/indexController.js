exports.registroWeb = async (req, res) => {
  res.render("registro", { user: req.session.username, page: "Registro", menuId: "registro" });
};

exports.loginWeb = async (req, res) => {
  res.render("login", { user: req.session.username, page: "Login", menuId: "login" });
};