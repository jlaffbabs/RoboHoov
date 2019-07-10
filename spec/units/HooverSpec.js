describe('Hoover', function () {
  const Hoover = require('../src/Hoover')
  var hoover;
  var aHooverPosition = [1, 2];

  beforeEach(function () {
    hoover = new Hoover(aHooverPosition);
  })

  it("should start in the correct position", function () {
    expect(hoover.x).toEqual(aHooverPosition[0]);
    expect(hoover.y).toEqual(aHooverPosition[1]);
  })

})
