const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// middleware that is specific to this router
router.use(bodyParser.json());

router.post('/', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

module.exports = router;
