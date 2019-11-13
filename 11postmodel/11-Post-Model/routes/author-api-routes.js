const db = require('../models');

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get('/api/authors', async (req, res) => {

  });

  app.get('/api/authors/:id', async (req, res) => {
    // Find one Author with the id in req.params.id and return them to the user with res.json

  });

  app.post('/api/authors', async (req, res) => {
    // Create an Author with the data available to us in req.body
    ;
  });

  app.delete('/api/authors/:id', async (req, res) => {
    // Delete the Author with the id available to us in req.params.id

  });
};
