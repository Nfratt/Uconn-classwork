const db = require('../models');

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get('/api/authors', async (req, res) => {
    const data =await db.Author.findAll();
    res.json(data);
  });

  app.get('/api/authors/:id', async (req, res) => {
    // Find one Author with the id in req.params.id and return them to the user with res.json

  });

  app.post('/api/authors', async (req, res) => {
    // Create an Author with the data available to us in req.body
    const {name}=req.body;
    try {
      const result = await db.Author.create({name});
      res.json({created: result.dataValues});
    } catch (error) {
      // better error description
      res.status(400).json({error: {...error.name, msg: error.message}});
    }
  });

  app.delete('/api/authors/:id', async (req, res) => {
    // Delete the Author with the id available to us in req.params.id

  });
};
