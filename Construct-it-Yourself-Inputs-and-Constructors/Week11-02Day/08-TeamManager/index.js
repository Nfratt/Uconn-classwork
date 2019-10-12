/* eslint-disable valid-jsdoc */
// dependency for inquirer npm package
const inquirer = require('inquirer');

/**
 * A programmer person
 */
class Player {
  /**
   *
   * @param {string} name Person's name
   * @param {string} position As assigned by HR
   // eslint-disable-next-line valid-jsdoc
   * @param {number} offense 0 -10
   * @param {number} defense 0-10
   */
  constructor(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
  }

  /**
   * Prints out all properties
   */
  printStats() {
    console.log(`
      Name: ${this.name}
      Position: ${this.position}
      offense: ${this.offense}
      defense: ${this.defense}

    `);
    // const starters=[];
    // const subs=[];
    //     goodgame() {
    //         Player.offence=++,
    //         Player.defense=++

    //     }
    // badgame(){
    //     Player.offence=--,
    //     player.defense=--,
    // }
  }
}
// variable we will use to count how many times our questions have been asked
let count = 0;
const coders= [];

const addPlayer = function() {
  // if statement to ensure that our questions are only asked five times
  if (count >= 3) {
    coders.forEach((it) => it.printStats());
    console.log('is done');
    return;
  }

  // runs inquirer and asks the user a series of questions whose replies are
  // stored within the variable answers inside of the .then statement
  inquirer.prompt([
    {
      name: 'name',
      message: 'What is the players name?',
    }, {
      name: 'position',
      message: 'What is your current position?',
    }, {
      name: 'offense',
      message: 'whats  their offense score',
    }, {
      name: 'defense',
      message: 'Whats their defense score?',
    },
  ]).then((answers) => {
    // initializes the variable newProgrammer
    // to be a programmer object which will take
    // in all of the user's answers to the questions above
    const roster = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense
    );

    // add the new Programmer to the answers array
    coders.push(roster);
    // add one to count to increment our recursive loop by one
    count++;
    // run the askquestion function again so as to
    // either end the loop or ask the questions again
    addPlayer();
  });
};

// call askquestion to run our code
addPlayer();
// const fillstarters= function() {
//   addPlayer(2, starters);
// };
//   const fillsubs= function() {
//     addPlayer(1, subs);
//   };
//   fillstarters(2);
//   fillsubs(1);
// };
