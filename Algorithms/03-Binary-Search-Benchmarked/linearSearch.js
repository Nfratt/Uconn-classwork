var result = linearSearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);

function linearSearch(numbersArr, searchElement) {
  for (var i = 0; i < numbersArr.length; i += 1) {
    if (numbersArr[i] === searchElement) {
      return i;
    }
  }

  return false;
}


module.exports = linearSearch