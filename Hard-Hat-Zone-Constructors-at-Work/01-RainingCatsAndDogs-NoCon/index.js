// creates an object and sets it to "dogs"
const dogs = {
  // creates the property "raining" and sets it to true
  raining: true,
  // creates the property "noise" and sets it to "Woof!"
  noise: 'Woof!',

  makeNoise: function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  },

  // creates the method "makeNoise", which when called,
  // prints dogs.noise if .raining is true
  makeNoiseBroken: () => {
  // the 'this' keyword DOES NOT refer to the object it's called from
  // i.e. this.raining does not exist
    if (this.raining === true) {
      console.log(this.noise);
    }
  },

  makeNoiseNew() {
    // the 'this' keyword here still refers to the object it's called from
    // i.e. this.raining refers to the raining property
    // of 'this' particular object
    if (this.raining === true) {
      console.log(this.noise);
    }
  },

};

// creates an object with a similar layout to "dogs" and sets it to "cats"
const cats = {
  raining: false,
  noise: 'Meow!',
  makeNoise: function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  },
};

// calls the "makeNoise" methods for both objects
dogs.makeNoiseNew();
cats.raining = true;
cats.makeNoise();

// creates a function called "massHysteria" which takes in both objects and
// prints a message to the screen if ".raining" is true for both of them
const massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
