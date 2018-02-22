const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// middleware
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

module.exports = app;
