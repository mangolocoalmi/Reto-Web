const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')


const index_controller = require('../controllers/indexController')

router.get("/", index_controller.loginWeb);

router.get('/registro', auth, index_controller.registroWeb)
router.get("/admin", auth, function (req, res) {
    res.render("dashboard", { user: req.session.username, menuId: "admin" });
});


router.get('/logout', auth, function (req, res) {
    req.session.destroy();
    res.redirect("/")
})    

module.exports = router