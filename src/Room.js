class Room {
  constructor(roomSize, dirtSpots, hooverPosition) {
    this.size = roomSize;
    this.dirtSpots = dirtSpots;
    this.hoover = new Hoover(hooverPosition);
  }

  hooverMove(directions) {
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] === "N") {
        this.hoover.y += 1
      } else if (directions[i] === "S") {
        this.hoover.y -= 1
      } else if (directions[i] === "E") {
        this.hoover.x += 1
      } else if (directions[i] === "W") {
        this.hoover.x -= 1
      }
    }
  }
}
