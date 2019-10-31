// Dependencies
const express = require('express');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Create express app instance.
const app = express();


// Route
// What parameters does your route need to have?
app.get('/:operand/:firstnumber/:secondnumber', function(req, res) {
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  const operation = req.params.operand;
  const first = parseInt(req.params.firstnumber);
  const second = parseInt(req.params.secondnumber);


  // TODO make sure they're converted to integers (and not strings)


  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
    case '+':
    case 'add':
    // Add your logic here. Pun intended.
      result= first+second;
      break;
    case '-':
    case 'subtract':
    // Subtract logic
      result =first-second;
      break;
    case '*':
    case 'multiply':
    // Multiply
      result = first*second;
      break;
    case 'divide':
    // Divide
      result= first/second;
      break;
    default:
    // Handle anything that isn't specified
      result = `Sorry!<br />
    The only valid operations are add, subtract, multiply, and divide.`;
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
