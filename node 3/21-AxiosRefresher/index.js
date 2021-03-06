// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
const axios = require('axios');

// We then run the request with axios module on a URL with a JSON
axios.get('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy')
    .then((response) => {
    // Then we print out the imdbRating
      console.log('The movie\'s rating is: ' + response.data.imdbRating);
    });
