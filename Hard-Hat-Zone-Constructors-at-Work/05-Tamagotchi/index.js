/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */

class DigitalPal {
  constructor(
      Hungry,
      Sleepy,
      Bored,
      Age
  ) {
    this.Hungry = Hungry,
    this.Sleepy = Sleepy,
    this.Bored = Bored,
    this.Age = Age;
  }
  PrintStats() {
    console.log(`
            hungry?: ${this.Hungry},
            sleepy? ${this.Sleepy},
            Bored? ${this.Bored},
            Age? ${this.Age},`
    );
  }
  feed() {
    if (this.Hungry = true) {
      console.log('that was yummy');
      this.Hungry = false;
    } else {
      console.log('No thanks! i\' m full');
    }
  }
  Sleep() {
    if (this.Sleepy = true) {
      console.log('Zzzzzzz');
      this.Sleepy = false;
      this.increaseage();
    } else {
      console.log('No way! i\'m not tired!');
    }
  }
  play() {
    if (this.Bored = true) {
      console.log('YAY,LET\'S PLAY!!!');
      this.Bored = false;
    } else {
      console.log('not right now, later?');
    }
  }
  increaseage() {
    this.Age++;
    console.log('HAPPY BIRTHDAY TO ME i am'+' '+this.Age+' years old.');
  }
}


const Tom1 = new DigitalPal(
    false,
    true,
    true,
    0

);
Tom1.PrintStats();
Tom1.feed();
Tom1.Sleep();
Tom1.play();
Tom1.Hungry=true;
Tom1.feed();
Tom1.PrintStats();
// const Dog = new DigitalPal(
//     false,
//     true,
//     true,
//     0,
//     // this.outside=outside,
//     // outside=false,
//     Dog.bark=function() {
//       console.log('WOOF!WOOF!');
//     }

// );
// Dog.PrintStats();



