const express = require('express')
const router = express.Router()

const usuario_controller = require('../controllers/userController')

router.get('/admin', function (req, res, next) {
    res.render("dashboard", { page: "Dashboard", menuId: "admin" });
});

router.get("/registro", usuario_controller.registro);

router.get("/login", usuario_controller.login);


module.exports = router