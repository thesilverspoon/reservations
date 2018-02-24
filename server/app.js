const path = require('path');
const express = require('express');
const morgan = require('morgan');

const restaurantsRouter = require('./routers/restaurants');
const reservationsRouter = require('./routers/reservations');

const app = express();

// middleware
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/restaurants', restaurantsRouter);
app.use('/reservations', reservationsRouter);

module.exports = app;
