const Input = require('../../src/Input')

describe('Input', function () {
  var input;

  var exampleData = ["5 5", "1 2", "1 0", "2 2", "2 3", "NNESEESWNWW"]
  
  beforeEach(function () {
    input = new Input();
  });

  it("should transform text file into array", function () {
    input.parse('./input.txt')
    expect(input.data).toEqual(exampleData)
  });
});
