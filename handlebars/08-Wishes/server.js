// Dependencies
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('promise-mysql');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Global variable that will hold DB connection
let dbConnection;

// Root get route
app.get('/', async (req, res) => {
  const data = await dbConnection.query('SELECT * FROM wishes;');
  // Test it
  // console.log('The solution is: ', data);

  // Test it
  // return res.send(data);

  res.render('index', {wishes: data});
});

// Post route -> back to home
app.post('/', async (req, res) => {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  // When using the MySQL package,
  // we'd use ?s in place of any values to be inserted,
  // which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection
  // which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  await dbConnection.query(
      'INSERT INTO wishes (task) VALUES (?)',
      [req.body.task],
  );

  res.redirect('/');
});

// Start our server so that it can begin listening to client requests.
// Once server has started up, set up the DB connection
app.listen(PORT, async function() {
  // Log (server-side) when our server has started
  console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
  console.log('----------------------------');

  // Now that server is listening,
  // create DB Connection
  try {
    dbConnection = await mysql.createConnection(require('./db-config'));
  } catch (error) {
    console.log('ERROR: DB CONNECTION FAILED');
    console.table(error);
    process.exit(1);
  }
  console.log('DATABASE CONNECTION ESTABLISHED');
  console.table(dbConnection.config);
});
