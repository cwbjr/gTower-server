const express = require('express');
const router = express.Router();
const queries = require('../db/origin-queries');

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(origin => {
      res.json(origin);
    });
});

module.exports = router;
