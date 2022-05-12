exports.registroWeb = async (req, res) => {
  res.render("registro", { user: req.session.username, page: "Registro", menuId: "registro" });
};

exports.loginWeb = async (req, res) => {
  res.render("login", { user: req.session.username, page: "Login", menuId: "login" });
};

exports.adminok = async (req, res) => {
  if (typeof req.session !== "undefined") {
    if (req.session.loggedin) {
      res.render("dashboard", { user: req.session.username, menuId: "admin" });
    } else {
      res.redirect('/');
    }
  }
  res.end();
};