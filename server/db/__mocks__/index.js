
const addReservation = ({ restaurantId }) => {
  if (typeof restaurantId === 'number') {
    // console.log('INSIDE MOCK addReservation OK');
    return new Promise(resolve => resolve());
  }
  // console.log('INSIDE MOCK addReservation REJECT');
  return new Promise((resolve, reject) => reject());
};

module.exports.addReservation = addReservation;
