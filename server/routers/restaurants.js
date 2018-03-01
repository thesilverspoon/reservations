const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/:id/reservations/:date?', (req, res) => {
  const dateParam = req.params.date
    ? req.params.date
    : (new Date()).toISOString().slice(0, 10);

  db.genReservationSlots({ restaurantId: req.params.id, date: dateParam })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log('genReservationSlots error', error);
      res.sendStatus(500);
    });
});

module.exports = router;
