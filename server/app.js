const path = require('path');
const express = require('express');
const morgan = require('morgan');

const restaurantsRouter = require('./routers/restaurants');

const app = express();

// middleware
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/restaurants', restaurantsRouter);

module.exports = app;
