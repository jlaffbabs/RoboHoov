describe('Room', function () {
  var room;
  var aRoomSize = [5, 5];
  var someDirtSpots = [[1, 0], [2, 2], [2, 3]];

  beforeEach(function () {
    room = new Room(aRoomSize, someDirtSpots);
  })

  it("should construct the room with the correct size", function () {
    expect(room.roomSize).toEqual(aRoomSize);
  })

  it("should place the dirt patches in the correct place", function () {
    expect(room.dirtSpots).toEqual(someDirtSpots);
  })
})
