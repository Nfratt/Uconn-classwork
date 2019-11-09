/* eslint-disable max-len */
// *******************************************************************
// api-routes.js - Routes for displaying and saving data to the db
// *******************************************************************

// Dependencies
// =============================================================
const Character = require('../models/character.js');

// Routes
// =============================================================
module.exports = function(app) {
  app.get('/api/:characters?', async (req, res) => {
    // Search for Specific Character (or all characters) and then respond with result(s)
    const results = req.params.characters ? 
    where:{
      routeName: characters,
    }
    await Character.findAll();
    res.json(results);
  });

  // If a user sends data to add a new character...
  app.post('/api/new', async (req, res) => {
    // Take the request...
    const character = req.body;

    // Create a routeName with spaces removed
   const routeName=character.name.replace

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html


    // Then add the character to the database using sequelize
  });
};
