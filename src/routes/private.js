var express = require('express'),
    routes = express.Router();
var passport = require('passport');

var authGuard = passport.authenticate('jwt', {
    session: false
});
routes.use(authGuard);

routes.get('/', (req, res) => {
    return res.json({
        msg: `Hey ${req.user.email}! Welcome to stater!`
    });
});

routes.get('/teste', (req, res) => {
    return res.json({
        msg: 'Teste'
    });
});

// routes.use('/project', require('./project'));

module.exports = routes;