const express = require('express');

const router = express.Router();

router.get('/:id/reservations/:date', (req, res) => {
  const response = {
    madeToday: 100,
    reservations: [{
      time: 17,
      remaining: 20,
    },
    {
      time: 18,
      remaining: 3,
    },
    {
      time: 19,
      remaining: 0,
    },
    {
      time: 20,
      remaining: 5,
    },
    {
      time: 21,
      remaining: 14,
    },
    ],
  };
  res.send(response);
});

router.get('/:id/reservations', (req, res) => {
  const response = {
    madeToday: 100,
    reservations: [{
      time: 17,
      remaining: 20,
    },
    {
      time: 18,
      remaining: 3,
    },
    {
      time: 19,
      remaining: 0,
    },
    {
      time: 20,
      remaining: 5,
    },
    {
      time: 21,
      remaining: 14,
    },
    ],
  };
  res.send(response);
});

module.exports = router;
