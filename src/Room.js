class Room {
  constructor(roomSize, dirtSpots, hooverPosition) {
    this.size = roomSize;
    this.dirtSpots = dirtSpots;
    this.hoover = new Hoover(hooverPosition);
  }
}
