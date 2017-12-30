let express = require('express'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    // session = require('express-session'),
    // passport = require('passport'),
    bodyParser = require('body-parser');

module.exports = (app, config) => {
    app.use(cookieParser());
    app.set('port', config.port);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.use(session({secret: 'multi vision unicorns'}))
    // app.use(passport.initialize())
    // app.use(passport.session())
    app.use(morgan('combined'));
    app.use(express.static(config.rootPath  + '/public'));
};