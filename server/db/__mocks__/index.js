
const addReservation = ({ restaurantId }) => {
  if (typeof restaurantId === 'number') {
    // console.log('INSIDE MOCK addReservation OK');
    return new Promise(resolve => resolve());
  }
  // console.log('INSIDE MOCK addReservation REJECT');
  return new Promise((resolve, reject) => reject());
};

const bookingsToday = () => new Promise(resolve => resolve({ rows: [{ count: 250 }] }));

const getOpenSeats = () => new Promise((resolve) => {
  resolve({
    rows: [{
      time: 17,
      remaining: 50,
    }],
  });
});

const getMaxSeats = () => new Promise(resolve => resolve({ rows: [{ seats: 75 }] }));


module.exports = {
  addReservation, bookingsToday, getOpenSeats, getMaxSeats,
};
