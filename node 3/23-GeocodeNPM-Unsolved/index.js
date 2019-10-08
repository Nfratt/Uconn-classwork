// Instructions:
// Build a Node application that takes in a location input via the command line,
// then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format:
// "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format:
// "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify
// in "pretty-print" format.

// ===========================================================================

// Include the node-geocoder NPM package
// (Remember to run "npm install node-geocoder"!)
const nodeGeocoder = require('node-geocoder');

// Replace with your mapquest consumer API key
const options = {
  provider: 'mapquest',
  apiKey: 'cf3C9PoSurZ7GXxGiFjHuZPSvNwC1F6g',
};

// Create a geocoder object that can query the mapquest API
const geocoder = nodeGeocoder(options);

console.log(geocoder);

const city= process.argv[2];
const state = process.argv[3];


// Take in the command line arguments
geocoder.geocode(+city+','+state, function(err, res) {
  console.log(res);
  console.log(JSON.stringify(results));
});
// Build your address as an array or string



// Then use the geocoder object to search the address
