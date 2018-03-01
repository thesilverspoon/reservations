const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/:id/reservations/:date?', (req, res) => {
  const dateParam = req.params.date
    ? req.params.date
    : (new Date()).toISOString().slice(0, 10);

  Promise.all([
    db.bookingsToday(req.params.id),
    db.getOpenSeats({
      restaurantId: req.params.id,
      date: dateParam,
    }),
    db.getMaxSeats(req.params.id),
  ])
    .then((results) => {
      // results[0] has the # bookings made info
      // results[1] has the timeslot & remaining seats info
      // results[2] has the max seats for the restaurant

      // create default reservations array with default values
      const returnedSlots = results[1].rows.map(row => ({
        time: row.time,
        remaining: Number(row.remaining),
      }));

      // if a reservation slot is not in the results, make a default one with
      // max seating availability
      const returnedTimes = results[1].rows.map(slot => slot.time);
      for (let i = 17; i < 22; i += 1) {
        if (!returnedTimes.includes(i)) {
          returnedSlots.push({ time: i, remaining: results[2].rows[0].seats });
        }
      }

      // sort returnedSlots
      returnedSlots.sort((a, b) => (a.time - b.time));

      const output = {
        madeToday: Number(results[0].rows[0].count),
        reservations: returnedSlots,
      };
      res.send(output);
    })
    .catch((error) => {
      console.log('Promise.all error', error);
      res.sendStatus(500);
    });
});

module.exports = router;
