var expect = require("chai").expect;
var disemvowel = require("../11-Stu_Disemvowel/disemvowel");
var titalize = require("../11-Stu_Disemvowel/titalize")


describe("disemvowel", function() {
  it("should accept a string of lowercased letters and return a version without vowles", function() {
    expect(disemvowel('test').to.equal("tst"));
  });
  it("should accept a string of uppercased letters and return a version without vowles", function() {
    expect(disemvowel('TEST').to.equal("TST"));
  });
  it("should accept a string of mixxed case letters and return a version without vowles", function() {
    expect(disemvowel('TesT').to.equal("TsT"));
  });

//   it("should throw when not passed numbers", function() {
//     expect(function() {
//       multiply(2, "4");
//     }).to.throw(Error);
//   });
});
describe("titalize", function(){
  it ("should take a string and capitalize the first letter",function(){
    expect(titalize('test').to.equal('Test'));
  });
  // somthign about turnign a  string capitalizeing 0 to make the 1ts letter capital 
  // play with more unit testing
})