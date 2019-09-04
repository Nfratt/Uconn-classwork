// number=[1,2,3,4,5,6,7... .]

// or 
var numbers = [];
for (var i = 0; i < 101; i++) {
  numbers.push(i);
  if (i %15 == 0)console.log ('fizzbuzz')
  else if (i % 3 == 0) console.log ('fizz')
  else if  (i % 5 == 0) console.log('buzz')
  else console.log(i)
  
}


