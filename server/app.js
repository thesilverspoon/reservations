const path = require('path');
const express = require('express');
const morgan = require('morgan');

const restaurantRouter = require('./routers/restaurant');

const app = express();

// middleware
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/restaurant', restaurantRouter);

module.exports = app;
