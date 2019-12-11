console.log('(Facts) ========================================================================== ');
console.log('"" == true:\t\t',      "" == true);
console.log('"" == false:\t\t',     "" == false);
console.log('"0" == true:\t\t',     "0" == true);
console.log('"0" == false:\t\t',    "0" == false);
console.log('"1" == true:\t\t',     "1" == true);
console.log('"1" == false:\t\t',    "1" == false);
console.log('0 == true:\t\t',       0 == true);
console.log('0 == false:\t\t',      0 == false);
console.log('null == true:\t\t',    null == true);
console.log('null == false:\t\t',   null == false);
console.log('undefined == true:\t', undefined == true);
console.log('undefined == false:\t', undefined == false);
console.log('[] == true:\t\t',      [] == true);
console.log('[3] == true:\t\t',     [3] == true);
console.log('[] == false:\t\t',     [] == false);
console.log('[3] == false:\t\t',    [3] == false);
console.log('{} == true:\t\t',      {} == true);
console.log('{} == false:\t\t',     {} == false);

// 1.
console.log('\n\n(1) ========================================================================== ');
console.log(true || false);
console.log(true && false);
console.log(0 && "lol");
console.log(false || "IDK MY BFF JILL");

// 2.
console.log('\n\n(2) ========================================================================== ');
console.log("" && [].length);
console.log("" || [].length);
console.log("" || [].length || 0);


// 3.
console.log('\n\n(3) ========================================================================== ');
const likesVeggies = true;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
// turnary
console.log(meal);

// 4.
console.log('\n\n(4) ========================================================================== ');
const feelingWell = true;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);
