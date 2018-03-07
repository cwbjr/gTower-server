const express = require('express');
const router = express.Router();
const queries = require('../db/player-queries');

function validPlayer(player) {
  return typeof player.tagline == 'string' &&
          player.tagline.trim() != '' &&
          !isNaN(player.level) &&
          Number.isInteger(player.level) &&
          player.level >= 0;
}

function validID(req, res, next) {
  if(!isNaN(req.params.id)) {
    next();
  } else {
    const error = new Error('Invalid ID');
    next(error);
  }
}

function  validPlayerMiddleware(req, res, next) {
  if(validPlayer(req.body)) {
    next();
  } else {
    const error = new Error('Invalid Player');
    next(error);
  }
}

function getPlayerFromBody(body) {
  const { name, tagline, level, profession_id, origin_id, image } = body;
  const player = {
    name,
    tagline,
    level,
    profession_id,
    origin_id,
    image
  };
  return player;
}

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(products => {
      res.json(products);
    });
});

router.get('/:id', validID, (req, res, next) => {
  queries
    .getOne(req.params.id)
    .then(product => {
      if(product) {
        res.json(product);
      } else {
        next();
      }
    });
});

router.post('/', validPlayerMiddleware, (req, res) => {
  const player = getPlayerFromBody(req.body);

  queries
    .create(player)
    .then(id => {
      res.json({
        id
      });
    });
});

router.put('/:id', validID, validPlayerMiddleware, (req, res) => {
  const product = getPlayerFromBody(req.body);

  queries
    .update(req.params.id, player)
    .then(() => {
      res.json({
        message: 'updated'
      });
    });
});

router.delete('/:id', validID, (req, res) => {
  queries
    .delete(req.params.id)
    .then(() => {
      res.json({
        message: "Deleted"
      });
    });
});

module.exports = router;
