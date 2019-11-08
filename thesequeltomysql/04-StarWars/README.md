# STEPS TO COMPLETE THE STAR WARS APP

* Update your .env file with DB_NAME = starwars_db and your user/password
* Run sql/schema.sql to create the DB.
* Install the sequelize and mysql2 npm packages.  They are missing from package.json.
* In character.js, model out the character table, as detailed in the sql/characterTable.png (remember, timestamp and id fields are put in by sequelize automagically)
* In app/routes/api-routes.js, add the code needed to make the routes respond with the correct outcome.
