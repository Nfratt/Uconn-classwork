/**
 * constructor which can be used to create objects
 * with the ".raining", ".noise",
 * and ".makenoise" properties
 * @param {*} raining
 * @param {*} noise
 */
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects
// and initializes them with raining and noise properties
const dogs = new Animal(true, 'Woof!');
const cats = new Animal(false, 'Meow!');

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
