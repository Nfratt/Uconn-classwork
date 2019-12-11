// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

// const logMessage = message => {
// console.log(message||"hello World!")
// //   if (!message) {
// //     message = "Hello World!";
// //   }
// //   console.log(message);
// logMessage();
// logMessage('Heya')
// };


const logMessage = message => {
  message = message || "Hello World"
  console.log(message);
};
const logMessage1 = message => {
  message = message ? message : "Hello World";
  console.log(message);
};
​
const logMessage2 = message => console.log(message || "Hello World");
​
logMessage();
logMessage1("hi11!!!!!");
logMessage2("by!!!!!");
// ​ this works


// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = (beenWorkingAllDay) => {
  let message;

  if (beenWorkingAllDay) {
    message = "I'm feeling really tired";
  } else {
    message = "I'm wide awake!";
  }

  console.log(message);
};
const beenWorkingAllDay=true
const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
console.log(message)

logTired(true);
