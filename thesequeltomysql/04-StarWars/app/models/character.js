// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Character" model that matches up with DB
const Character = sequelize.define('character', {
  // ADD NEEDED COLUMN SPECS HERE
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.STRING,
  forcepoints: Sequelize.STRING,
}, {
  // disable the modification of tablenames;
  // By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files
// (will also create a table)
module.exports = Character;
