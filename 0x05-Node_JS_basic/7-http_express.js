/**
 * Creates an Express.js server that responds with different messages based on the request URL.
 *
 * This script creates an Express.js server listening on port 1245. It defines two routes:
 * - GET "/": Responds with "Hello Holberton School!".
 * - GET "/students": Asynchronously reads a CSV file specified in the command-line arguments,
 *   counts the number of students, and responds with the list of students.
 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});
app.listen(1245);
module.exports = app;
