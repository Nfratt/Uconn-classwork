// DRY=do not repeat yourself
// this is how you set up a object
const dog={
  raining: true,
  noise: 'woof!',
  makenoise: function() {
    if (this.raining) console.log(this.noise);
  },
};
const cat={
  raining: false,
  noise: 'meow!',
  makenoise: function() {
    if (this.raining) {
      console.log(this.noise);
    }
  },
};
cat.raining=true;
dog.makenoise();
cat.makenoise();


function massHysteria(animal1, animal2) {
  if (animal1.raining && animal2.raining) {
    console.log('"DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
}
