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

const bookingsToday = restaurantId => client.query(
  'SELECT COUNT(id) FROM reservations WHERE restaurantid=$1 AND timestamp=$2',
  [restaurantId, (new Date()).toISOString().slice(0, 10)],
);

const getOpenSeats = ({
  restaurantId, date,
}) => client.query(
  'SELECT time,(MAX(restaurants.seats)-SUM(party)) AS remaining FROM reservations INNER JOIN restaurants ON restaurants.id = reservations.restaurantid WHERE date=$1 AND restaurantid=$2 GROUP BY time',
  [date, restaurantId],
);

const getMaxSeats = restaurantId => client.query(
  'SELECT seats FROM restaurants WHERE id=$1',
  [restaurantId],
);

const addReservation = ({
  restaurantId, date, time, name, party,
}) => client.query(
  'INSERT INTO reservations (restaurantid, date, time, name, party) VALUES ($1,$2,$3,$4,$5)',
  [restaurantId, date, time, name, party],
);

const addRestaurantInfo = ({
  id, name, seats,
}) => client.query(
  'INSERT INTO restaurants (id,name,seats) VALUES ($1,$2,$3)',
  [id, name, seats],
);

module.exports = {
  client, bookingsToday, getOpenSeats, addReservation, addRestaurantInfo, getMaxSeats,
};
