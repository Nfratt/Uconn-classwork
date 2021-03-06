// dependency for inquirer npm package
const inquirer = require('inquirer');

/**
 * A programmer person
 */
class Programmer {
  /**
   *
   * @param {string} name Person's name
   * @param {string} position As assigned by HR
   * @param {number} age 0 - 99
   * @param {string} language just their primary language
   */
  constructor(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }

  /**
   * Prints out all properties
   */
  printInfo() {
    console.log(`
      Name: ${this.name}
      Position: ${this.position}
      Age: ${this.age}
      Language: ${this.language}

    `);
  }
}
// variable we will use to count how many times our questions have been asked
let count = 0;
const coders= [];

const askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count >= 5) {
    coders.forEach((it) => it.printInfo());
    return;
  }

  // runs inquirer and asks the user a series of questions whose replies are
  // stored within the variable answers inside of the .then statement
  inquirer.prompt([
    {
      name: 'name',
      message: 'What is your name?',
    }, {
      name: 'position',
      message: 'What is your current position?',
    }, {
      name: 'age',
      message: 'How old are you?',
    }, {
      name: 'language',
      message: 'What is your favorite programming language?',
    },
  ]).then((answers) => {
    // initializes the variable newProgrammer
    // to be a programmer object which will take
    // in all of the user's answers to the questions above
    const newProgrammer = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language
    );

    // add the new Programmer to the answers array
    coders.push(newProgrammer);
    // add one to count to increment our recursive loop by one
    count++;
    // run the askquestion function again so as to
    // either end the loop or ask the questions again
    askQuestion();
  });
};

// call askquestion to run our code
askQuestion();
