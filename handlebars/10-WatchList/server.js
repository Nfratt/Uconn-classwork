// Dependencies
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('promise-mysql');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Global variable that will hold DB connection
let dbConnection;

// Use Handlebars to render the main index.html page with the movies in it.
app.get('/', async (req, res) => {
  try {
    const data = await dbConnection.query('SELECT * FROM movies');
    res.render('index', {movies: data});
  } catch (error) {
    res.status(500).send(`${error.name}: ${error.message}`);
  }
});

// Create a new movie_name
app.post('/api/movies', async (req, res) => {
  try {
    const result = await dbConnection.query(
        'INSERT INTO movies (movie_name) VALUES (?)',
        [req.body.movie_name],
    );
    // Send back the ID of the new movie_name
    res.json({id: result.insertId});
    console.log({id: result.insertId});
  } catch (error) {
    res.status(500).send(`${error.name}: ${error.message}`);
  }
});

// Update a movie_name
app.put('/api/movies/:id', async (req, res) => {
  try {
    const result = await dbConnection.query(
        'UPDATE movies SET movie_name = ? WHERE id = ?',
        [req.body.movie_name, req.params.id],
    );
    const status = result.changedRows === 0 ? 404 : 200;
    res.status(status).end();
  } catch (error) {
    // If an error occurred, send info about the error
    res.status(500).send(`${error.name}: ${error.message}`);
  }
});

// Delete a movie_name
app.delete('/api/movies/:id', async (req, res) => {
  try {
    const result = await dbConnection.query(
        'DELETE FROM movies WHERE id = ?',
        [req.params.id],
    );
    const status = result.affectedRows === 0 ? 404 : 200;
    res.status(status).end();
  } catch (error) {
    // If an error occurred, send info about the error
    res.status(500).send(`${error.name}: ${error.message}`);
  }
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
