// function preclass(sentence){
//     var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
//     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     if (alph.indexOf(sentence) > -1) {
//         return true
//         //In the array
//     } else {
//         return false
//         //Not in the array
//     }
//     // trim the string
//     // create an array with the alphabet
//     // itirate through the array to check true 
//     // if all true than return true 
//     // if any false return flase 
// }
function prework(sentence){
    // define the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    // make all letters in string lowercase
    sentence = sentence.toLowerCase().replace(/[^a-z]/g,'')
    // iterate through up until the length of the alphabet
    for (var i = 0; i < 26; i++)
      // if the string does not include the letter return false
      if (string.indexOf(alphabet[i]) < 0) return false
      // otherwise return true
      return true
  }
  prework()
//   use .includes

  var isPangram = function (str) {
    str = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])){
            return false;
        }
    }
    return true;
  }
  
//   ‘abcdefghijklmnopqrstuvwxyz’.split(“”).every(it => new RegExp(it, ‘i’).test(“Five hexing wizard bots jump quickly”));
// “abcdefghijklmnopqrstuvwxyz”.split(“”).every(function(letter) {return “Five hexing wizard bots jump quickly”.toLowerCase().includes(letter)});