
/**
 * moder class with the ".raining", ".noise",
 * and ".makenoise" properties
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Animal {
  /**
   * @property {bool} isRaining
   */
  get isRaining() {
    return this.raining;
  }

  /**
   * @param {boolean} raining
   * @param {string} noise
   */
  constructor(raining, noise) {
    this.raining = raining;
    this.noise = noise;
  }

  /**
   * @void
   */
  makeNoise() {
    if (this.isRaining === true) {
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
