// As always, we grab the fs package to handle read/write.
const fs = require('fs');

// Next, we store the text given to us from the command line.
const text = process.argv[2];

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.appendFile('sample.txt',' ',',', text, function (err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  } else { // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    console.log('Content Added!');
  }

});
