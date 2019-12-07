const express = require('express');
const logger = require('morgan');
const mongojs = require('mongojs');
​
const PORT = process.env.PORT || 3000;
​
// Initialize Express
const app = express();
​
// Configure our app for morgan and body parsing with express.json and express.urlEncoded
app.use(logger('dev'));
// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));
​
// Mongojs configuration
const databaseUrl = 'warmup';
const collections = ['books'];
​
// Hook our mongojs config to the db var
const db = mongojs(databaseUrl, collections);
db.on('error', function(error) {
  console.log('Database Error:', error);
});
​
// Routes
// ======
​
// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
​
// Post a book to the mongoose database
app.post('/api/submit', function(req, res) {
  // Save the request body as an object called book
  const book = req.body;
​
  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;
​
  db.books.save(book, function(err, savedBook) {
    if (err) {
      console.log(err);
    } else {
      console.log(savedBook);
      res.send(savedBook);
    }
  });
});
​
// Find all books marked as read
app.get('/api/read', function(req, res) {
  db.books.find({read: true}, respondWithData(res));
});
​
// Find all books marked as unread
app.get('/api/unread', function(req, res) {
  db.books.find({read: false}, respondWithData(res));
});
​
// Mark a book as having been read
app.put('/api/markread/:id', function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  toggleRead(req.params.id, true, respondWithData(res));
});
​
// Mark a book as having been not read
app.put('/api/markunread/:id', function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  toggleRead(req.params.id, false, respondWithData(res));
});
​
function toggleRead(id, read, cb) {
  db.books.update(
      {
        _id: mongojs.ObjectId(id),
      },
      {
        $set: {
          read,
        },
      },
      cb,
  );
}
​
function respondWithData(res) {
  return function(error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      res.send(data);
    }
  };
}
​
// Set the app to listen on PORT
app.listen(PORT, function() {
  console.log('App running on http://localhost:%s', PORT);
});
Collapse



