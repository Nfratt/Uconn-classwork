// Dependencies
require('dotenv').config();
const express = require('express');
const mysql = require('promise-mysql');

// Create instance of express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Global variable that will hold DB connection
let connection;

