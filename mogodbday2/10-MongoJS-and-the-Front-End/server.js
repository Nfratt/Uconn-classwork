// Students: Your work is in the front-end.
// Run this server file with node/nodemon, then open public/app.js where you need to make calls to these routes.


// Dependencies
const express = require('express');
const mongojs = require('mongojs');

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Set up a static folder (public) for our web app
app.use(express.static('public'));

// Database configuration
// Save the URL of our database as well as the name of our collection
const databaseUrl = 'zoodb';
const collections = ['animals'];

// Use mongojs to hook the database to the db variable
const db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(error) {
  console.log('Database Error:', error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get('/', function(req, res) {
  res.send('Hello world');
});

// 2. At the "/api/all" path, display every entry in the animals collection
app.get('/api/all', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.animals.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send the result of this query to the browser
      res.json(found);
    }
  });
});

// 3. At the "/api/name" path, display every entry in the animals collection, sorted by name
app.get('/api/name', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  db.animals.find().sort({name: 1}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send the result of this query to the browser
      res.json(found);
    }
  });
});

// 4. At the "/api/weight" path, display every entry in the animals collection, sorted by weight
app.get('/api/weight', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by weight (-1 means descending order)
  db.animals.find().sort({weight: -1}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send the result of this query to the browser
      res.json(found);
    }
  });
});

// Set the app to listen on PORT
app.listen(PORT, function() {
  console.log('App running on http://localhost:%s', PORT);
});
