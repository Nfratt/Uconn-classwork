// Require/import the HTTP module
// this would be in a .env file

var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7003;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url+"Be the Leaf");
}
function handleRequest2(request, response) {
    const arr=['hi','bye','jawns'];
    const idx=Math.floor(Math.random()*3)
    response.end("It Works!! Path Hit: " +arr[idx]+ request.url+"ALL YOUR LANDS ARE BELONG TO US!");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);
// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {
  // Log (server-side) when our server has started
  // listening on local ip adress
  console.log("Server listening on: http://localhost:" + PORT);
});
server2.listen(PORT2, function () {
    console.log("Server listening on: http://localhost:" + PORT2);
  });



