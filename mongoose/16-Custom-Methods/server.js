const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// Requiring the `User` model for accessing the `users` collection
const User = require('./userModel.js');

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger('dev'));
// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/custommethods', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post('/submit', function(req, res) {
  // Create a new user using req.body

  const user = new User(req.body);
  user.coolifier();
  user.makeCool();

  User.create(user)
      .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
      // If an error occurs, send the error to the client
        res.json(err);
      });
});

// Set the app to listen on PORT
app.listen(PORT, function() {
  console.log('App running on http://localhost:%s', PORT);
});
