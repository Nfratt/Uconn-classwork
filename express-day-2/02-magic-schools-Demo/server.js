// Dependencies
require('dotenv').config();
const express = require('express');
const mysql = require('promise-mysql');


// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Global variable that will hold DB connection
let connection;

// Routes
app.get('/', async function(req, res) {
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  const result = await connection.query('SELECT * FROM schools');

  // We then begin building out HTML elements for the page.
  let html = '<h1> Magical Schools </h1>';

  // Here we begin an unordered list.
  html += '<ul>';

  // We then use the retrieved records
  // from the database to populate our HTML file.
  for (let i = 0; i < result.length; i++) {
    html += '<li><p> ID: ' + result[i].id + '</p>';
    html += '<p>School: ' + result[i].name + ' </p></li>';
  }

  // We close our unordered list.
  html += '</ul>';

  // Finally we send the user the HTML file we dynamically created.
  res.send(html);
});

// Start our server so that it can begin listening to client requests.
// Once server has started up, set up the DB connection
app.listen(PORT, async function() {
  // Log (server-side) when our server has started
  console.log('SERVER LISTENING ON: http://localhost:' + PORT);
  console.log('----------------------------');

  // Now that server is listening,
  // create DB Connection
  try {
    connection = await mysql.createConnection(require('./db-config'));
  } catch (error) {
    console.log('ERROR: DB CONNECTION FAILED');
    console.table(error);
    process.exit(1);
  }
  console.log('DATABASE CONNECTION ESTABLISHED');
  console.table(connection.config);
});
