require('dotenv').config();
const { Client } = require('pg');

// clients will also use environment variables
// for connection information
const client = new Client();


client.connect();
client.end();
//   .then(() => console.log('connected'))
//   .catch(e => console.error('connection error', err.stack));

const getOpenSeats = (restaurantId, date) => {
  console.log(date, restaurantId);
  return 0;
};

const addReservation = (restaurantId, date, time, name, party) => {
  console.log(restaurantId, date, time, name, party);
  return 0;
};


module.exports = { getOpenSeats, addReservation };
