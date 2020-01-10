// Benchmark is a library that times
const Benchmark = require('benchmark');
const generate = require('./generate');
const platform = require('platform');

// Generate an array of the given length.
const length = 10000000;
const stuff = generate(length);
const randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
const suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
    .add('Linear Search', function linearSearch() {
      for (let i = 0; i < stuff.length; i += 1) {
        if (stuff[i] === randomValue) {
          return stuff[i];
        }
      }
      return false;
    })
// On 'start', run the 'start' function.
    .on('start', function start() {
      console.log('\n\n--------- YOUR MACHINE ---------');
      console.table(platform);
      console.log('\nBeginning benchmark...');
    })

// On the 'complete' event, run the 'report' function.
    .on('complete', function report() {
    // Get successful benchmark.
      console.log('\n...Benchmark done.');
      const benchmark = Benchmark.filter(this, 'successful')[0];
      console.log(`\nSample count: ${benchmark.stats.sample.length}`);
      const {moe, rme, sem, deviation, mean, variance} = benchmark.stats;
      console.log('\n--------- STATS ---------');
      console.table({moe, rme, sem, deviation, mean, variance});
      console.log('\n--------- TIMES ---------');
      console.table(benchmark.times);
      console.log(`\nMean completion time of ${benchmark.name}: ${benchmark.stats.mean} seconds\n`);
    })

// Run the test!
    .run();
