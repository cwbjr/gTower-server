const express = require('express');
const router = express.Router();
const queries = require('../db/player-queries');

function validPlayer(player) {
  player.level = parseInt(player.level)
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
  console.log(req.body);
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

router.get('/', (req, res, next) => {
  queries
    .getAll()
    .then(players => {
      res.json(players);
    }).catch(err => next(err));
});

router.get('/:id', validID, (req, res, next) => {
  queries
    .getOne(req.params.id)
    .then(player => {
      if(player) {
        res.json(player);
      } else {
        next();
      }
    }).catch(err => next(err));
});

router.post('/', validPlayerMiddleware, (req, res, next) => {
  const player = getPlayerFromBody(req.body);

  queries
    .create(player)
    .then(id => {
      res.json({
        id
      });
    }).catch(err => next(err));
});

router.put('/:id', validID, validPlayerMiddleware, (req, res, next) => {
  const player = getPlayerFromBody(req.body);

  queries
    .update(req.params.id, player)
    .then(() => {
      res.json({
        message: 'updated'
      });
    }).catch(err => next(err));
});

router.delete('/:id', validID, (req, res, next) => {
  queries
    .delete(req.params.id)
    .then(() => {
      res.json({
        message: "Deleted"
      });
    }).catch(err => next(err));
});

module.exports = router;
