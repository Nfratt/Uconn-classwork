// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {
  const len=items.length;
  let min;

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready to start swapping elements in the array.
for(var i=0; i< len ;i++){
 min=i
  for (var y = i + 1; y< len; y++) {
    if (items[y] < items[min]) {
     min=y
    }
  }
if (i !== min ){
  swap(items,i,min);
}
}
return items
}


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));



















//   // swap
//   if (i !== min) {
//     swap(items, i, min);
//   }
// }
// return items;
// }