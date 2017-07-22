const express = require('express');
const app = express();
const knex = require('./knex');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);

app.listen(port, () => {
  console.log("listening on port", port);
});

module.exports = app;
