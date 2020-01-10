// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("./generate");
var linearSearch = require('./linearSearch');
var binarySearch = require('./binarySearch');


// Generate an array of the given length.
var length = 10000000;
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  // .add("Linear Search", function search() {
  //   return linearSearch(stuff, randomValue);
  // })
// Add the function 'binarySearch' to the suite.
  .add("Binary Search", function search() {
    return binarySearch(stuff, randomValue);
  })
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log('\n\n--------- YOUR MACHINE ---------');
    console.table(platform)
    console.log("\nBeginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    console.log("\n...Benchmark done.");
    var benchmark = Benchmark.filter(this, "successful")[0];
    console.log(`\nSample count: ${benchmark.stats.sample.length}`);
    const {moe, rme, sem, deviation, mean, variance} = benchmark.stats;
    console.log('\n--------- STATS ---------');
    console.table({moe, rme, sem, deviation, mean, variance});
    console.log('\n--------- TIMES ---------');
    console.table(benchmark.times)
    console.log(`\nMean completion time of ${benchmark.name}: ${benchmark.stats.mean} seconds\n`);
  })

  // Run the test!
  .run();
