// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

const cheerio = require('cheerio');
const axios = require('axios');


async function scrape() {
// Make a request via axios to grab the HTML body from the site of your choice
const response = await axios.get('https://www.myfavoritesite.com');

  // Load the response data into cheerio and then select the data of
  // interest from the html using cheerio selectors, putting the results in a results array.


  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
}

scrape();
