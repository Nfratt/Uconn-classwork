// 1. When using var, our counter exists after a for-loop is done

console.log('(1 - var) ------------------------------- ');

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // Prints 5


console.log('\n\n(1 - let) ------------------------------- ');

// When using let, our counter is not defined outside of the for-loop block

let x = 42;

for (let j = 0; j < 5; j++) {
  console.log(j);
  console.log(x);
}

try {
  console.log(j); // ReferenceError: j is not defined
} catch (error) {
  console.log(error.name, error.message);
}


let j = 42;
console.log(j); // prints 42

// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block

console.log('\n\n(2 - var) ------------------------------- ');

var count = 0;

while (count < 5) {
  var tripled = count * 3;
  count++;
}

console.log(tripled); // Prints 12

// ==========================================================================

// When using let, values defined inside of the while-loop block don't exist outside of it
console.log('\n(2 - let) ------------------------------- ');
let c = 0;

while (c < 5) {
  let quadrupled = c * 3;
  c++;
}

try {
  console.log(quadrupled); // ReferenceError: quadrupled is not defined
} catch (error) {
  console.log(error.name, error.message);
}

// ==========================================================================

// 3. When writing conditionals, values defined inside the conditional block exist outside of it

console.log('\n\n(3 - var) ------------------------------- ');
if (true) {
  var favoriteColor = "red";
}

console.log(favoriteColor); // Prints `red`

// When using let, values defined inside of a conditional block don't exist outside

console.log('\n(3 - let) ------------------------------- ');
let favoriteFood;

if (true) {
  favoriteFood = "pizza";
  let favoriteDrink = 'beer';
}

// This works since favoriteFood is not defined inside of a block
console.log(favoriteFood);
// Prints `pizza`

try {
  console.log(favoriteDrink); // ReferenceError: favoriteDrink is not defined
} catch (error) {
  console.log(error.name, error.message);
}

