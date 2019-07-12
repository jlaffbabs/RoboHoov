const Input = require('../../src/Input')

describe('Input', function () {
  var input;

  var exampleData = ["5 5", "1 2", "1 0", "2 2", "2 3", "NNESEESWNWW"]
  
  beforeEach(function () {
    input = new Input();
  });

  it("should transform text file into array", function () {
    input.parse('./input.txt');
    expect(input.data).toEqual(exampleData)
  });

  it("should separate the data into the correct sub-array", function () {
    input.parse('./input.txt');
    input.separate();
    expect(input.roomSize).toEqual([5, 5])
    expect(input.dirtSpots).toEqual([[1, 0], [2, 2], [2, 3]])
    expect(input.hooverPosition).toEqual([1, 2])
    expect(input.directions).toEqual("NNESEESWNWW")
  });
});
