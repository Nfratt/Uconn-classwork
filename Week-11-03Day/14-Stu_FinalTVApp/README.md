# TV App

In this activity we will build out our app to be able to search the TV Maze API for a given actor's name or for a given show.

## Instructions

### Packages needed:
    * axios
    * inquirer (if not using `process.argv`)

### Retrieve show

* Sample API call: <http://api.tvmaze.com/singlesearch/shows?q=scrubs>.

* After getting the JSON response from the HTTP request, create a string containing the following information from the returned show data:

  * The name of the show
  * The show's genre(s)
  * The show's average rating
  * The show's network name
  * The show's summary

* Save this string to the `log.txt` file using the `fs.appendFile` method. If the file does not already exist, `fs.appendFile` will create it.

* After saving the data to the `log.txt` file, print this information to the console.

* Verify your code works by running the cli file and passing in the name of a TV show, e.g. `node cli show Scrubs`. This should print the specified information to the console and save it to the `log.txt` file.


### Retrieve actor

* Sample api call: <http://api.tvmaze.com/search/people?q=jennifer%20aniston>
  
* Save the following information to the `log.txt` file using the `fs.appendFile` method:

  * The actor's name
  * The actor's birthday
  * The actor's gender
  * The actor's country
  * The actor's TV Maze URL

* Once the data has been saved to the `log.txt` file, print it to the console.

* Test that your code works properly by running the `index.js` file with arguments. e.g. `node index actor Jennifer Aniston`.

### Bonus

* Once you've finished the basic activity, update the `cli.js` file to use the `inquirer` npm package to prompt the user for their search and term rather than `process.argv`.

### Hints

* You likely used the `axios` package for the Liri HW assignment. Refer back to this if you need a refresher on how to use the package.

* Check out the selected answer for the question: [how to append a file in node?](https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node)
