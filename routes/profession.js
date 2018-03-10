const express = require('express');
const router = express.Router();
const queries = require('../db/profession-queries');

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(profession => {
      res.json(profession);
    });
});

module.exports = router;
