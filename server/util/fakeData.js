const faker = require('faker');

const dummyData = require('./dummydata.v2');


const infoList = dummyData.map(rest => ({
  id: rest.id,
  name: rest.name,
  seats: 20 + (Math.floor(50 * Math.random())),
}));

const generateReservations = () => {
  const reservationList = [];

  const dateStr = (new Date()).toISOString().slice(0, 10);

  dummyData.forEach((rest) => {
    const maxSeats = infoList.find(item => item.id === rest.id).seats;

    // for 5pm to 9pm
    for (let t = 17; t < 22; t += 1) {
      // about 50% chance of fully booking a time
      let seatsLeft = Math.min(maxSeats, Math.floor(maxSeats * 2 * Math.random()));

      // generate a list of reservations that add up to seatsTaken
      while (seatsLeft > 0) {
        const partySize = Math.min(seatsLeft, 1 + Math.floor(10 * Math.random()));

        reservationList.push({
          restaurantId: rest.id,
          date: dateStr,
          time: t,
          name: faker.name.findName(),
          party: partySize,
        });

        seatsLeft -= partySize;
      }
    }
  });

  return reservationList;
};



// console.log(aggregateRes[infoList[0].id]);
// console.log(infoList[0]);


module.exports = { infoList, generateReservations };
