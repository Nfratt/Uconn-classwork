// ***************************************************************
// api-routes.js - routes for displaying and saving data to the db
// see https://sequelize.org/v5/manual/querying.html for setting up queries
// ***************************************************************

// Dependencies
// =============================================================
const Op = require('sequelize').Op;
const Book = require('../models/book.js');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get('/api/all', function(req, res) {


    
  });

  // Get a specific book
  app.get('/api/:book', function(req, res) {

  });

  // Get all books of a specific genre
  app.get('/api/genre/:genre', function(req, res) {


  });

  // Get all books from a specific author
  app.get('/api/author/:author', function(req, res) {



  });

  // Get all "long" books (books 150 pages or more)
  app.get('/api/books/long', function(req, res) {



  });

  // Get all "short" books (books 150 pages or less)
  app.get('/api/books/short', function(req, res) {



  });

  // Add a book
  app.post('/api/new', function(req, res) {



  });

  // Delete a book
  app.delete('/api/book/:id', function(req, res) {



  });
};
