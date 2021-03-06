// 1. const can be used for values which we will not reassign
console.log('(1 - const) ========================================================================== ');
const age = 25;

try {
    age++; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.log(error.name, error.message);
  }


// ==========================================================================

const name = "";
try {
    name = "Cherie"; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.log(error.name, error.message);
  }


// ==========================================================================
console.log('\n\n(2 - const - reference) ========================================================================== ');
// 2. const doesn't mean `constant value`, it means `constant reference`

// Unlike primitive data types, objects and arrays are passed by reference, rather than passed by value
const beatles = ["John", "Paul", "Ringo"];
beatles.push("George");

// This works because by updating an array's contents, we aren't changing the reference to the underlying array
console.log(beatles); // Prints `["John", "Paul", "Ringo", "George"]`

console.log(beatles);
beatles.length==0
// empties array
const person = { name: "Brianna", age: 11 };
person.age++;
person.favoriteMovie = "Spider-Man";
person.name = "Carla";

console.log(person); // Prints `{ name: 'Carla', age: 12, favoriteMovie: 'Spider-Man' }`

// ==========================================================================
console.log('\n\n(3 - const no reassign) ========================================================================== ');
// 3. While we can MODIFY arrays and objects that are using `const`, we can't reassign them

const item = {
  id: 23,
  title: "Underwater Basket-Weaving DVD",
  price: "$17.99"
};

item.price = "$1.99";

console.log(item);

try {
    item = {
        id: 11,
        title: "Underwater Basket-Weaving Shoes",
        price: "$101.43"
      }; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.log(error.name, error.message);
  }


const ninjaTurtles = [];

// The same rules apply to arrays, we can MODIFY them, but not completely reassign them
try {
    ninjaTurtles = [
        "Michaelangelo",
        "Leonardo",
        "Raphael",
        "Donatello"
      ]; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.log(error.name, error.message);
  }

