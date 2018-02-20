'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Note = require('./api/models/notes');

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

console.log(process.env.DB_URI);

mongoose.connect(process.env.DB_URI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const corsOptions = {
    origin: process.env.CORS_WHITELIST
};
app.use(cors(corsOptions));

var routes = require('./api/routes/notes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('nizzotes-api server srsrted on: ' + port);