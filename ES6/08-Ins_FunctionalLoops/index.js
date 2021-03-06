const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];
​
const movieNames = [
  'et',
  'starwars'
];
// 1.
​
// forEach is a functional way of iterating through an array without a for-loop
console.log('\n\n(1) forEach ==================================');
​
const ret = moviePatrons.forEach(patron => console.log(patron.age));
console.log(ret);
​
// 2.
​
// Filter returns a new array containing only elements whose callback returns a truthy value
​
console.log('\n\n(2) filter ==================================');
const canWatchRatedR = moviePatrons.filter((patron) => patron.age > 17);
​
console.log(moviePatrons);
console.log(canWatchRatedR);
​
// 3.
​
// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array
console.log('\n\n(3) map ==================================');
const cardedMoviePatrons = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  return patron;
});
​
const cardedMoviePatrons2 = moviePatrons.map(patron => {
  patron.age >= 17 ? patron.canWatchRatedR = true : patron.canWatchRatedR = false;
  return patron;
});
​
const cardedMoviePatrons3 = moviePatrons.map(patron => {
  patron.canWatchRatedR = patron.age >= 17;
  return patron;
});
​
console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons2 );
console.log(moviePatrons)
​
const newMovieNames = movieNames.map(name => name + ' hit!');
console.log(newMovieNames);
console.log(movieNames)
​