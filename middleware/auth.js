'use strict';

module.exports = (req, res, next) => {
    console.log(req.session);
    if (!req.session.loggedin) {
        return res.redirect('/');
    }
    next();
};
