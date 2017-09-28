require('dotenv').config();
var express = require('express');
var app = express();
var db = require('./db');

var ItemController = require('./item/ItemController');
app.use('/items', ItemController);

module.exports = app;