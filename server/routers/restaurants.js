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
  ])
    .then((results) => {
      // results[0] has the # bookings made info
      // results[1] has the timeslot & remaining seats info
      const output = {
        madeToday: Number(results[0].rows[0].count),
        reservations: results[1].rows.map(row => ({
          time: row.time,
          remaining: Number(row.remaining),
        })),
      };
      res.send(output);
    })
    .catch((error) => {
      console.log('Promise.all error', error);
      res.sendStatus(500);
    });
});

module.exports = router;
