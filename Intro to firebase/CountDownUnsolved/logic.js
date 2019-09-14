// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "**************** check google firebase",
  authDomain: "fsfinclass.firebaseapp.com",
  databaseURL: "https://fsfinclass.firebaseio.com",
  projectId: "fsfinclass",
  storageBucket: "",
  messagingSenderId: "388732962786",
  appId: "1:388732962786:web:178ed814fd1d2df6955bbb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
database.ref().on("value", function(snapshot){

// We are now inside our .on function...
// Console.log the "snapshot" value (a point-in-time representation of the database)
console.log(snapshot)
// This "snapshot" allows the page to get the most current values in firebase.
// Change the value of our clickCounter to match the value in the database
var data= snapshot.val();
// Console Log the value of the clickCounter
// ternary: shorter if statment;
// value = test = true? this :this other thing
clickCounter=data ? data.countDownCounter:initialValue 
// if (data){
//  clickcounter = data.Count.DownCounter;
// }else{
// clickCounter=initalvalue;
// }
console.log(clickCounter)
// Change the HTML using jQuery to reflect the updated clickCounter value
$("#click-value").text(clickCounter);
// Then include Firebase error logging
}, 
function(errorObject){}
);
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    countDownCounter:clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
   database.ref().set({
     countDownCounter:clickCounter
   })

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
