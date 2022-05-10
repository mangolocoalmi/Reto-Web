exports.registroWeb = async (req, res) => {
  res.render("registro", { page: "Registro", menuId: "registro" });
};

exports.loginWeb = async (req, res) => {
  res.render("login", { page: "Login", menuId: "login" });
};

exports.adminok = async (req, res) => {
  console.log(req.session);
  if (typeof req.session !== "undefined") {
    if (req.session.loggedin) {
      res.render("dashboard", { page: req.session.username, menuId: "admin" });
    } else {
      res.send("Please login to view this page!");
    }
  }
  res.end();
};

exports.adminok = async (req, res) => {
  console.log(req.session);
  if (typeof req.session !== "undefined") {
    if (req.session.loggedin) {
      res.render("dashboard", { page: req.session.username, menuId: "admin" });
    } else {
      res.send("Please login to view this page!");
    }
  }
  res.end();
};