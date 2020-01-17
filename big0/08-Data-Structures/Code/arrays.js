var array = [1, 2, 3, 4];
console.log(array);

// Adding to beginning
array.unshift(1);
console.log(array);

// Adding to beginning - the long way
for (var i = array.length; i >= 0; i--) {  // walk down from top and shift every item right 1
  array[i] = array[i - 1];
}
array[0] = -1;
console.log(array);
