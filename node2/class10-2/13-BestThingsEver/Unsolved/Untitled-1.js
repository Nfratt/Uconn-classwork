// fs is a core Node package for reading and writing files
const fs = require('fs');


// Telling pc to read file
fs.readFile('Unsolved/best_things_ever.txt', 'utf8', function (error, data) {

  // error reporting
  if (error) {
    return console.log(error);
  }

// print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  const dataArr = data.split(',')
  .map((it) => it.trim())
  .sort()
  .forEach((it) => console.log(it))
  




  console.log(dataArr);

});