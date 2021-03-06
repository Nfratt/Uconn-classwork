var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  try {
    func(x, y);

  } catch (error) {
    threw=true;
    console.log(error)
  }
 


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof x !== "number"|| typeof y !== "number") {
    var arr=['a',]
    // throw an error if either x or y is not a number
    throw new Error('did not enter a number')
  }
  else return x * y;
};

console.log('for a & 3 assertThrows ', assertThrows(multiply,'a',3));
console.log('for 5 & 3 assertThrows ', assertThrows(multiply,5,3));
