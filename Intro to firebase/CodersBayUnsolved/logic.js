var firebaseConfig = {
  apiKey: "AIzaSyB9z-Xxsf4NOVJslAlIw1jE0yR-YWhb2c4",
  authDomain: "fsfinclass.firebaseapp.com",
  databaseURL: "https://fsfinclass.firebaseio.com",
  projectId: "fsfinclass",
  storageBucket: "",
  messagingSenderId: "388732962786",
  appId: "1:388732962786:web:178ed814fd1d2df6955bbb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var database =firebase.database();
var path ="coderbay/"


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref(path).on("value", function(snapshot) {
console.log(snapshot)
var data = snapshot.val();



  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.

    highPrice = data.highPrice;
    highBidder = data.highBidder;


    // Change the HTML to reflect the stored values
    $('#higest-price').text(highPrice)
    $('#highest-bidder').text(highBidder)

    // Print the data to the console.
      console.log(highPrice)
      console.log(highBidder)

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    
    $('#highest-price').text(initialBid)
    $('#highest-bidder').text(initialBidder)

    // Print the data to the console.
    console.log(highPrice)
    console.log(highBidder)

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
var bidderName=$("#bidder-name").val();
var bidderPrice= $("#bidder-price").val();
console.log(bidderPrice);
console.log(bidderName);


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {
    
    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
 database.ref(path).set({
   highBidder:highBidder,
   highPrice:highPrice
 })

    // Log the new High PriceS
      highPrice=bidderPrice;
      highBidder=bidderName;
      console.log(highPrice)
    

    // Store the new high price and bidder name as a local variable
      localStorage.setItem("highestPrice",highPrice)
      localStorage.setItem("highestbidder",highBidder)

    // Change the HTML to reflect the new high price and bidder
    $('#highest-price').text(bidderPrice)
    $('#highest-bidder').text(bidderName)
  }

  else {
    database.ref(path).set({
      highBidder:initialBidder,
      highPrice:initialValue
    })
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
