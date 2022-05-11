const express = require('express')
const router = express.Router()

const index_controller = require('../controllers/indexController')

router.get("/", function (req, res) {
    res.render("index.ejs", { user: req.session.username, menuId: "inicio" });
});

router.get("/login", index_controller.loginWeb);
router.get('/registro', index_controller.registroWeb)
router.get("/admin", index_controller.adminok);


router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect("/")
})    

module.exports = router