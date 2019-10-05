// Using the require keyword lets us access all of the exports
// in our ess.js file
const bands = require("./bands.js");


// for (i=0;i<bands.length;i++){ text+=bands[i]
// }
for (let p in bands){
    console.log ('a'+p+' band is '+bands[p]);
}

// // This will print everything in exports.
// console.log("--------------------------");
// console.log(" ");
// console.log(bands);
// console.log("--------------------------");

// // These will print correctly because we imported them
// console.log("A rap group is");
// console.log(bands.rap);
// console.log("--------------------------");
// console.log("A punk band is");
// console.log(bands.punk);

// // This won't print anything because it wasn't exported in ess.js
// console.log("--------------------------");
// console.log("A classic rock band is");
// console.log(bands.classic);
