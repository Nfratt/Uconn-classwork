
/**
 *
 */
class Character {
  /**
     *
     * @param {string} name Name of character
     * @param {string} profession What the character does
     * @param {string} gender 'male' or 'female'
     * @param {number} age How old
     * @param {number} strength Will be used in fighting 1 - 10
     * @param {number} hitPoints Character's score
     */
  constructor(
    name,
    profession,
    gender,
    age,
    hitPoints,
    strength
  ) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.hitPoints = hitPoints;
    this.strength = strength;
  }

  /**
   * Print out Character's current state
   */
  printStats() {
    console.log(`
        name: ${this.name}, 
        profession: ${this.profession}, 
        gender: ${this.gender}, 
        age: ${this.age}, 
        strength: ${this.strength}, 
        hit points: ${this.hitPoints}
        `);
  }

  /**
   * Is the Char alive?
   */
  isAlive() {
    console.log('Is alive? ', this.hitPoints > 0);
  }

  /**
   *
   * @param {Character} char A char in this game
   */
  attack(char) {
    char.hitPoints = char.hitPoints - this.strength;
    console.log(`
    ${char.name} was attacked! 
    Remaining hit points: ${char.hitPoints}`);
  }
}


const hero = new Character(
  'Tony Stark',
  'Tech Bro',
  'male',
  '48',
  100,
  10
);

const thor = new Character(
  'Thor',
  'NorseMan',
  'male',
  '34',
  100,
  8
);

hero.printStats();
hero.isAlive();

hero.attack(thor);
