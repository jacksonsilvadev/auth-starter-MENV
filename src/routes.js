var express = require('express'),
    routes = express.Router();
var passport = require('passport');

// Public route
routes.use('/', require('./routes/public'));

// protected routes
routes.use('/dash', require('./routes/private'));

module.exports = routes;