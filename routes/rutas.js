const express = require('express')
const router = express.Router()

router.get('/admin', function (req, res, next) {
    res.render('dashboard', { page: 'Panel Admin', menuId: 'dasboard' });
});

// Register
router.post("/registro", (req, res) => {
// our register logic goes here...
});

// Login
router.post("/login", (req, res) => {
// our login logic goes here
});


module.exports = router