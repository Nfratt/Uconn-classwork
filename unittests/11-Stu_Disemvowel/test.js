var expect = require("chai").expect;
var disemvowel = require("../11-Stu_Disemvowel/disemvowel");


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