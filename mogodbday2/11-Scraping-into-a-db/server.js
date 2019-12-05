// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
const express = require('express');
const mongojs = require('mongojs');
// Require axios and cheerio. This makes the scraping possible
const axios = require('axios');
const cheerio = require('cheerio');

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Database configuration
const databaseUrl = 'scraperdb';
const collections = ['scrapedData'];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
db.on('error', function(error) {
  console.log('Database Error:', error);
});

// Main route (simple Hello World Message)
app.get('/', function(req, res) {
  res.send('Hello world');
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Set the app to listen on PORT
app.listen(PORT, function() {
  console.log('App running on http://localhost:%s', PORT);
});
