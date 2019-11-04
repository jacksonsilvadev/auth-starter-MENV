var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path')
var mongoose = require('mongoose');
var config = require('./src/config/config');
var port = process.env.PORT || 5000;
var cors = require('cors');
var serveStatic = require('serve-static')
var app = express();
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.log.bind(console, 'MongoDB Connection error :'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(passport.initialize());
var passportMiddleware = require('./src/middleware/passport');
passport.use(passportMiddleware);



var routes = require('./src/routes.js');
app.use('/api', routes);
app.use("/", serveStatic(path.join(__dirname, '/client/dist')));



app.get('*', function (request, response, next) {

    response.sendFile(__dirname + '/client/dist/index.html');
});

app.listen(port, () => {
    console.log('Server run ' + port)
});