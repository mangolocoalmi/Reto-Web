const express = require('express')
const router = express.Router()

const usuario_controller = require('../controllers/userController')

router.get('/admin', function (req, res, next) {
    res.render('dashboard', { page: 'Panel Admin', menuId: 'admin' });
});

// Register
router.post("/registro", (req, res) => {

});
router.post("/registro", usuario_controller.crear_usuario);

// Login
router.post("/login", (req, res) => {

});


module.exports = router