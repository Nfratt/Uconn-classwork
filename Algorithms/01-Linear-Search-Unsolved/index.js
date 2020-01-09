// Require dependencies.
var generate = require("./generate");

// Generate array of given length.
var length = 14;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];

console.log(' ');

console.log(`Array we are searching through: ${stuff}`);
console.log(`Random value to search for: ${randomValue}`);
console.log('----------------------');

/**
 * Write a for loop that looks at each number in the array `stuff` to see if it matches the randomValue
 * If it does match the randomValue log the index position of the matching number.  There may be more than one match.
 *
 * Here is a visual animation of a linear search: https://www.cs.usfca.edu/~galles/visualization/Search.html
 */

