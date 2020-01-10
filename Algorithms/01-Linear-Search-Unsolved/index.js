// Require dependencies.
var generate = require("./generate");

// Generate array of given length.
var length = 14;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];
// var isthere=false


console.log(' ');

console.log(`Array we are searching through: ${stuff}`);
console.log(`Random value to search for: ${randomValue}`);
console.log('----------------------');
// for (var i = 0; i < stuff.length; i+=1) {
//     if (stuff[i]==randomValue){
//         console.log ("the number is at index",i)
//         isthere=true;
//         console.log(isthere)

//     }
//     else 
//     return console.log(isthere);}

// function example(){
//     for (var i = 0; i < stuff.length; i++) {
//         if (stuff[i]==randomValue){
//             console.log ("the number is at index",i)
//             return true
//         }
//         else 
//         return false 
//     }
// }

// example();


const findmatch=(arr,num)=>{
    for (var i = 0; i < stuff.length; i++) {
        if (arr[i]===num)
        return true;
        
    }
    console.log (i)
        return false
    
    };
findmatch(stuff,randomValue)
/**
 * Write a for loop that looks at each number in the array `stuff` to see if it matches the randomValue
 * If it does match the randomValue log the index position of the matching number.  There may be more than one match.
 *
 * 
 * Here is a visual animation of a linear search: https://www.cs.usfca.edu/~galles/visualization/Search.html
 */

