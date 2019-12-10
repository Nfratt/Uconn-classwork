
console.log('\n\n1 ----------------------');

var person1 = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log('(1) ', this.name + "!");
    }, 100);
  }
};

person1.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

console.log('\n\n2 ----------------------');
// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person2 = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log('(2) ', this.name + "!"), 100);
  }
};

person2.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later


/*
NOTE:
Depending on the environment `setTimeout` is called in, it may refer to one of two objects
In the browser, `setTimeout` is a property of the `window` object
In node, it belongs to a special "Timeout" object
but in both cases it does the same thing
*/
