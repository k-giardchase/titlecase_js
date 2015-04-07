describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of two words", function(){
      expect(titleCase("the cat")).to.equal("The Cat");
  })

it("capitalizes the first letter of the first word but doesn't capitlize certain words that are less than five leters within", function(){
    expect(titleCase("the a cat in the hat")).to.equal("The a Cat in the Hat");
})

});
