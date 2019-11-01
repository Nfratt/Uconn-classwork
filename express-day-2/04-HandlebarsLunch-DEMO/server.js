// Dependencies
const express = require('express');
const expHbs = require('express-handlebars');

/**
 * Docs for this newly introduced tech:
 * @see {@link https://github.com/ericf/express-handlebars}
 * @see {@link https://github.com/wycats/handlebars.js} {@link http://handlebarsjs.com/}
 * @see {@link http://expressjs.com/en/api.html#app.engine}
 * @see How to make your own template engine: {@link http://expressjs.com/en/advanced/developing-template-engines.html#developing-template-engines-for-express}
 * @see {@link http://expressjs.com/en/api.html#res.render}
 */
// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Data
const lunches = [
  {
    lunch: 'Beet & Goat Cheese Salad with minestrone soup.',
  }, {
    lunch: 'Pizza, two double veggie burgers, fries with a Big Gulp',
  },
];

// Routes
app.get('/weekday', (req, res) => {
  res.render('single-lunch', lunches[0]);
});

app.get('/weekend', (req, res) => {
  res.render('single-lunch', lunches[1]);
});

app.get('/lunches', (req, res) => {
  res.render('all-lunches', {
    foods: lunches,
    eater: 'david',
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
