// ***********************************************************************
// api-routes.js - set of routes for displaying and saving data to the db
// ***********************************************************************

// Dependencies
// =============================================================
const Chirp = require('../models/chirp.js');


// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get('/api/all', async (req, res) => {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    const results = await Chirp.findAll({});
    res.json(results);
  });

  // Add a chirp
  app.post('/api/new', async (req, res) => {
    console.log('Chirp Data:');
    console.table(req.body);

    const result = await Chirp.create({
      author: req.body.author,
      body: req.body.body,
    });
    res.json({id: result.insertId});
  });
};
