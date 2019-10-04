// process.argv will print out any command line arguments.
// console.log(process.argv);
// console.log(process.argv.length);
// // console.log(process.env);
// // Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

const num1 =process.argv[2],
num2 = process.argv[3];
console.log(num1===num2);