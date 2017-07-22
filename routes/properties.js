'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const queries = require('../queries/properties_query');

router.get('/:id?', (req, res, next) => {
  let id = req.params.id;
  queries.getProperties(id)
  .then(result => {
    res.send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req,res,next) => {
  var property = req.body;
  knex('properties')
    .insert(property)
    .then(result=>{
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
