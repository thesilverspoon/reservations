require('dotenv').config();
const { Client } = require('pg');

// clients will also use environment variables
// for connection information
const client = new Client();


client.connect();

client.on('end', () => {
  console.log('pg client end');
});

client.on('error', (error) => {
  console.error('pg client error', error);
});

const getOpenSeats = (restaurantId, date) => {
  console.log(date, restaurantId);
  return 0;
};

const addReservation = ({
  restaurantId, date, time, name, party,
}) => client.query(
  'INSERT INTO reservations (restaurantId, date, time, name, party) VALUES ($1,$2,$3,$4,$5)',
  [restaurantId, date, time, name, party],
);

const addRestaurantInfo = ({
  id, name, seats,
}) => client.query(
  'INSERT INTO restaurants (id,name,seats) VALUES ($1,$2,$3)',
  [id, name, seats],
);

module.exports = { getOpenSeats, addReservation, addRestaurantInfo };
