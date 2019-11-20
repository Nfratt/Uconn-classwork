var disemvowel = function(str) {
// complete this implementation once you have 
// coded your unit tests
var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (typeof str ==="number") return str;
  else
  return str.split('').filter(function(str) {
    return vowels.indexOf(str.toLowerCase()) == -1;
  }).join('');
  
}

disemvowel("TesT");


module.exports = disemvowel;




