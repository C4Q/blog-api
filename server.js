const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('./models');

console.log('Models', models);

mongoose.connect('mongodb://localhost/blog-api');

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));

db.on('open', () => {
  console.log('db connection opened!');
  app.listen(4321, () => {
    console.log('Listening on port 4321!');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
