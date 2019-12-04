# 01 - Creating dbs, inserting data and finding data

## DB Setup
* If you haven't already done so in a terminal window, start a mongo session by typing 
  ```
  mongo
  ``` 
  and hitting Enter.
  
* Start up a new database by switching to it.

* NOTE: The db does not exist until you create a collection:

```
use lessondb
```

* Show the current db by running db:

```
db
```


## Inserting Data
* Insert data into the lessondb database with this command:
  
```
db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]})
```

* NOTE: This will create the `places` collection automatically.

* ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:

* As a class, come up with 3-5 more countries and insert them into the db using the same syntax as above.

* Observe where the data was entered in the MongoDB instance (in mongod).

## Find All Data
* Find all data in a Collection with `db.[COLLECTION_NAME].find()`.
```
db.places.find()
```

* NOTE: the MongoDB _id was created automatically.  This id is specific for each doc in the collection.
  
* Adding .pretty() makes the data more readable:

```
db.places.find().pretty()
```

## Find Specific Data
* Find specific data by matching a field:

```
db.places.find({"continent": "Africa"})
db.places.find({"country": "Morocco"})
```

* Note flexibility in use of quotes:
```
db.places.find({country: 'Morocco'})
```

* Try a few queries with the examples we came up with as a class.

* Also, pick something that will find more than one entry so we can see how it will return all matches.

* Find specific data by matching an _id:

```
db.places.find({_id:[COPY AN OBJECTID FROM THE PREVIOUS FIND RESULTS]})
```

* Example: `db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")})`
