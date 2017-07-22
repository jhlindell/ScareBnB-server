const express = require('express');
const app = express();
const knex = require('./knex');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("listening on port", port);
});

module.exports = app;
