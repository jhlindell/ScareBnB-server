'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const cookieSession = require('cookie-session');

router.get('/:id?', (req, res, next) => {
  let id = req.params.id;
  if(id){
    knex('users')
    .where("id", id)
    .then(result => {
      return res.send(result);
    })
    .catch(err => {
      next(err);
    });
  }
  else{
    knex('users')
    .then(result => {
      return res.send(result);
    })
    .catch(err => {
      next(err);
    });
  }
});

router.post('/register' , (req, res, next) => {
  knex('users')
  .insert(req.body, '*')
  .then(result => {
    return res.send(result[0]);
  })
  .catch(err => {
    next(err);
  });
});

router.patch('/register/:id', (req, res, next) => {
  let id = req.params.id;
  console.log("input",req.body);
  knex('users')
  .where('id',id)
  .update(req.body, '*')
  .then(result => {
    return res.send(result[0]);
  })
  .catch(err => {
    next(err);
  });
})

module.exports = router;
