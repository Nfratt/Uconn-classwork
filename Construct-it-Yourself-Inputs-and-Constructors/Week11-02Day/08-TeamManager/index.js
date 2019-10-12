/* eslint-disable valid-jsdoc */
// dependency for inquirer npm package
const inquirer = require('inquirer');

/**
 * A player on the team
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
  constructor(name, position, offense, defense, starter) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.starter=true;
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
      starter:${this.starter}

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
      type: 'number',
    }, {
      name: 'defense',
      message: 'Whats their defense score?',
      type: 'number',

    }, {
      name: 'starter',
      message: 'is the person a starter?',
      type: 'confirm',
      // if no than starter becomes false
    },
  ]).then((answers) => {
    // initializes the variable newProgrammer
    // to be a programmer object which will take
    // in all of the user's answers to the questions above
    const roster = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense,
        answers.starter
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
// let score=0
// const playgame=function(count,rounds){
//     if (count==rounds){return;}
//     const rando=()=> Math.ceil(math.random()*21);
//     const off= rando();
//     const def = rando();
//     const offstat=team.reduce((sum,it)=>sum+it.offense);
//     const defstat=team.reduce((sum,it)=> sumt+it.defense);
//     if (off<offstat)score++;
//     if (def>defstat)score--;
//     return score
// };

// }
// call askquestion to run our code
addPlayer();

// randnum=math.random(1)
// const fillstarters= function() {
//   addPlayer(2, starters);
// };
//   const fillsubs= function() {
//     addPlayer(1, subs);
//   };
//   fillstarters(2);
//   fillsubs(1);
// };
// const playgame=function()
//
// if countg <5
//      run playgame offence 1-defense 2
//  if postitve
// math .rand >1 offence++
// math.rand <1 defense++
// score++
// countg ++
// if neg
// math. rand>1 offense --
// math.rand <1 defense --
// score --
//  if score==o
// countg++
// run play game again
// create extra question on weather or not somone is
// use a checkbox or confirm
// a sub then person.push them to the correct array based on the answer


