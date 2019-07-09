describe('Hoover', function () {
  var hoover;
  var aHooverPosition = [1, 2];

  beforeEach(function () {
    hoover = new Hoover(aHooverPosition);
  })

  it("should start in the correct position", function () {
    expect(hoover.x).toEqual(aHooverPosition[0]);
    expect(hoover.y).toEqual(aHooverPosition[1]);
  })

  describe("#move", function () {
    it("should move up and down relative to cardinal directions", function () {
      hoover.move("NNNS");
      expect(hoover.y).toEqual(4);
    })

    it("should move left and right relative to cardinal directions", function () {
      hoover.move("EEW");
      expect(hoover.x).toEqual(2);
    })

    it("should move both x and y at same time", function () {
      hoover.move("SE");
      expect(hoover.y).toEqual(1);
      expect(hoover.x).toEqual(2);
    })
  })
      
})
