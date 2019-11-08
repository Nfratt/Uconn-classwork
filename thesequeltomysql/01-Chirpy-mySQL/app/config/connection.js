// ************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// ************************************************************

// Require mysql
const mysql = require('promise-mysql');

// Export connection
module.exports = {
  connection: null,
  createDbConnection: async function() {
  // create new DB Connection
    try {
      this.connection = await mysql.createConnection(require('./db-config'));
    } catch (error) {
      console.log('ERROR: DB CONNECTION FAILED');
      console.table(error);
      process.exit(1);
    }
    console.log('DATABASE CONNECTION ESTABLISHED');
    console.table(this.connection.config);
  },
};

