const Room = require('../../src/Room')
describe('Room', function () {
  var room;
  let aRoomSize;
  let someDirtSpots;
  let aHooverPosition;

  beforeEach(function () {
    aRoomSize = [5, 5];
    someDirtSpots = [[1, 0], [2, 2], [2, 3]];
    aHooverPosition = [1, 2];
    someDirections = "NNESEESWNWW"
    room = new Room(aRoomSize, someDirtSpots, aHooverPosition, someDirections);
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
  
  describe("#hooverMove", function () {
    it("should move up and down relative to cardinal directions", function () {
      room.hooverMove("NNNS");
      expect(room.hoover.y).toEqual(4);
    })

    it("should move left and right relative to cardinal directions", function () {
      room.hooverMove("EEW");
      expect(room.hoover.x).toEqual(2);
    })

    it("should move both x and y at same time", function () {
      room.hooverMove("SE");
      expect(room.hoover.y).toEqual(1);
      expect(room.hoover.x).toEqual(2);
    })

    it("should throw an error if non-cardinal direction is given", function () {
      expect(function() { room.hooverMove("12") }).toThrow(new Error("Please give Cardinal Directions"))
      expect(function() { room.hooverMove("right") }).toThrow(new Error("Please give Cardinal Directions"))
      expect(function() { room.hooverMove("SENJ") }).toThrow(new Error("Please give Cardinal Directions"))
    })
  })
  
  describe("#dirtCheck", function () {
    it("should add to the count of dirt spots cleaned", function () {
      room.hooverMove("SS");
      expect(room.dirtCount).toEqual(1);
    })

    it("dirtCount should automatically increment during movement", function () {
      room.hooverMove("SSENNN");
      expect(room.dirtCount).toEqual(3);
    })

    it("dirtCheck should not count the same spot twice", function () {
      room.hooverMove("SSNS");
      expect(room.dirtCount).toEqual(1);
    })
  })

  describe("#block", function () {
    it("should block the hoover from moving", function () {
      room.hooverMove("WW")
      expect(room.hoover.x).toEqual(0);
      room.hooverMove("NNNN")
      expect(room.hoover.y).toEqual(5);
    })
  })
})
