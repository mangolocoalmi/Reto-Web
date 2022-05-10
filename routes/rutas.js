const express = require('express')
const router = express.Router()

const usuario_controller = require('../controllers/userController')

router.get('/admin', usuario_controller.adminok)

router.get('/registro', usuario_controller.registroWeb)
    .post('/registro', usuario_controller.registro)

router.get('/login', usuario_controller.loginWeb)
    .post('/login', usuario_controller.login)        

module.exports = router