const express = require('express');
const app = express();
const knex = require('./knex');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const users = require('./routes/users');
const properties = require('./routes/properties');
const cors = require('cors');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/properties', properties);

app.listen(port, () => {
  console.log("listening on port", port);
});

module.exports = app;
