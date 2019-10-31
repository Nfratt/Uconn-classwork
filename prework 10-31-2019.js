// write a function that takes a number and reverses it 

// mine
function reversedNum(numbers) {
  return (
    parseFloat(
      numbers.toString()
        .split('')
        .reverse() 
        .join('')
    ) * Math.sign(numbers)
  )                 
}

reversedNum()
// zachs
console.log(
    +prompt("Enter a value").split("").reverse().join("")
 )


// shakibs 
 var reverseDigit = function (num){
    var newNum = '';
    var numStr = num.toString();
    for (var i = numStr.length - 1 ; i >= 0; i--){
      newNum += numStr[i];
    }
    return parseInt(newNum);
   }
   var reverseDigit = function (num){
    var newNum = 0;
    var lastDigit;
    while (num > 0){
      lastDigit = num % 10;
      newNum = (newNum * 10) + lastDigit;
      num = parseInt(num / 10);
    }
    return newNum;
   }