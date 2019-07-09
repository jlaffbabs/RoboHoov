describe('Hoover', function () {
  var hoover;
  var aHooverPosition = [1, 2];

  beforeEach(function () {
    hoover = new Hoover(aHooverPosition);
  })

  it("should start in the correct position", function () {
    expect(hoover.position).toEqual(aHooverPosition);
  })
})
