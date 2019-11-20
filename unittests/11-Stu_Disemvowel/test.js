var expect = require("chai").expect;
var disemvowl = require("../disembowel");


describe("disemvowl", function() {
  it("should accept a string of lowercased letters and return a version without vowles", function() {
    expect(disemvowl('test').to.equal("tst"));
  });

  it("should throw when not passed numbers", function() {
    expect(function() {
      multiply(2, "4");
    }).to.throw(Error);
  });
});