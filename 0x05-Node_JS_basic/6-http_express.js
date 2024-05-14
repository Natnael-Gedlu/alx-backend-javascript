/**
 * Creates an Express.js server that responds with "Hello Holberton School!".
 *
 * This script creates an Express.js server listening on port 1245. When a GET request is made to "/",
 * it responds with the message "Hello Holberton School!".
 *
 * @module app
 * @requires express
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
