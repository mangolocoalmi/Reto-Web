const express = require("express");
const router = express.Router();

const usuario_controller = require("../controllers/userController");

router.post("/registro", usuario_controller.registro);
router.post("/login", usuario_controller.login);


module.exports = router