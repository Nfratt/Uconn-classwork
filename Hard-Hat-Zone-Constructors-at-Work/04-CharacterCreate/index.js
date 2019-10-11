/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
class character {
  constructor(
      Name,
      Profession,
      Gender,
      Age,
      Str,
      HP,
  ) {
    this.Name = Name,
    this.Profession = Profession,
    this.Gender = Gender,
    this.Age = Age,
    this.Str = Str,
    this.HP = HP;
  }
  PrintStats() {
    console.log(`
            Name: ${this.Name},
            Profession: ${this.Profession},
            Age: ${this.Age},
            Str: ${this.Str},
            HP: ${this.HP};`);
  }
  isAlive() {
    console.log('Is alive? ', this.HP > 0);
  }
  attack(char) {
    char.HP = char.HP - this.Str;
    console.log(`
    ${char.Name} was attacked! 
    Remaining hit points: ${char.HP}`);
  }
  Levelup() {
    this.HP += 25;
    this.Age++;
    this.Str += 5;
  }
  runaway() {
    if (this.HP < 10) {
      console.log(`${char1} runs away`);
    };
  }
}

const char1 = new character(
    'Yukinokage',
    'Druid',
    'Female',
    120,
    1160,
    342000
);
const char2 = new character(
    'Nnzoth',
    'Old-God',
    'Unknown',
    999,
    10000,
    1000000
);
char2.PrintStats();
char1.PrintStats();

char1.attack(char2);
char1.Levelup();
char1.PrintStats();
char1.runaway();

char1.attack(char2);
char1.attack(char2);
char2.attack(char1);
char1.PrintStats();
char2.PrintStats();





//     isAlive: function () {
//         if (hp > 0) this.isAlive = true;
//     },
//     PrintStats: function () {
//         console.log(
//             this.name,
//             this.profession,
//             this.age,
//             this.Str,
//             this.HP);
//     },
//     Attack: function () {
//         // tar.hp-=char.str
//     },
//     LevelUp: function () {
//         this.age++ ,
//             this.HP + 25,
//             this.Str + 5
//     }
// char.PrintStats();
// };

// const tar = {
//     name: 'nnzoth',
//     profession: 'oldgod',
//     gender: 'unknown',
//     age: 999999999,
//     Str: 100,
//     HP: 10000000,
//     isAlive: function () {
//         if (hp > 0) this.isAlive = true;
//     }
