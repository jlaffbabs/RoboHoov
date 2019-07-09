describe('Room', function () {
  var room;
  var aRoomSize = [5, 5];
  var someDirtSpots = [[1, 0], [2, 2], [2, 3]];
  var aHooverPosition = [1,2];

  beforeEach(function () {
    room = new Room(aRoomSize, someDirtSpots, aHooverPosition);
  })

  it("should construct the room with the correct size", function () {
    expect(room.size).toEqual(aRoomSize);
  })

  it("should place the dirt patches in the correct place", function () {
    expect(room.dirtSpots).toEqual(someDirtSpots);
  })

  it("should place hoover in the correct place", function () {
    expect(room.hoover.position).toEqual(aHooverPosition);
  })
})
