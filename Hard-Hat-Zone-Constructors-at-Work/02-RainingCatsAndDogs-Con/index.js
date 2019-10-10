/**
 * constructor which can be used to create objects
 * with the ".raining", ".noise",
 * and ".makenoise" properties
 * @param {*} raining
 * @param {*} noise
 */
// constructor function
// eslint-disable-next-line require-jsdoc
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise =() => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects
// and initializes them with raining and noise properties
// new adds a attribute to our constcutor function
const dogs = new Animal(true, 'Woof!');
const cats = new Animal(false, 'Meow!');
const allmycats=[];
for (let i =0; i<39; i++) {
  allmycats.push(new Animal(true, 'meow!'));
}

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();
allmycats[10].makeNoise();

const massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
