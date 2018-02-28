const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const router = express.Router();

// middleware that is specific to this router
router.use(bodyParser.json());

router.post('/', (req, res) => {
  console.log('POST recvd', req.body);
  db.addReservation(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
