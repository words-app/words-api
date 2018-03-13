'use strict';

const bodyParser = require('body-parser');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const Note = require('./api/models/notes');
const isDev = require('./utils').isDev;

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

// instantiate passport
require('./api/config/passport')(passport);

// required for passport
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'testing123'
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: process.env.CORS_WHITELIST
};
app.use(cors(corsOptions));

//import routes
var routes = require('./api/routes/routes');

//register routes
routes(app, passport);

app.listen(port);

if (isDev()) {
    console.log(chalk.blue(`nizzotes-api server started on: ${port}`));
}
