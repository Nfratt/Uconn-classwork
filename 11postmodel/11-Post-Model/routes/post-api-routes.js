// *********************************************************************************
// post-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get('/api/posts', async (req, res) => {
    const data =await db.Post.findAll();
    res.json(data);
    // Add sequelize code to find all posts, and return them to the user with res.json
  });

  // Get route for returning posts of a specific category
  app.get('/api/posts/category/:category', async (req, res) => {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
  });

  // Get route for retrieving a single post
  app.get('/api/posts/:id', async (req, res) => {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
  });

  // POST route for saving a new post
  app.post('/api/posts', async (req, res) => {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json\
    const {title, body, category}=req.body;
    try {
      const result = await db.Post.create({title, body, category});
      res.json({id: result.dataValues});
    } catch (error) {
      // better error description
      res.status(400).json({error: {...error.name, msg: error.message}});
    }
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', async (req, res) => {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put('/api/posts', async (req, res) => {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
};
