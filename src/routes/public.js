var express = require('express'),
    routes = express.Router();
var userController = require('../controller/userController');
var passport = require('passport');


routes.get('/', function (req, res) {
    return res.send('Hello world!');
});

routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);

module.exports = routes;