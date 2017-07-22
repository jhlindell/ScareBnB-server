'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id?', (req, res, next) => {
  let id = req.params.id;
  knex('users')
  .then(result => {
    return res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
