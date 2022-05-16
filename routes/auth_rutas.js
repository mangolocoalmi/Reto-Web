const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

const usuario_controller = require("../controllers/userController");

router.post("/registro", auth, usuario_controller.registro);
router.post("/login", usuario_controller.login);


module.exports = router