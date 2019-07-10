class Room {
  constructor(roomSize, dirtSpots, hooverPosition) {
    this.size = roomSize;
    this.dirtSpots = dirtSpots;
    this.hoover = new Hoover(hooverPosition);
    this.dirtCount = 0;
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
      } else {
        throw new Error("Please give Cardinal Directions")
      }
      this.blockX()
      this.blockY()
      this.dirtCheck()
    }
  }

  dirtCheck() {
    for (var i = 0; i < this.dirtSpots.length; i++) {
      if ((this.hoover.x === this.dirtSpots[i][0]) && (this.hoover.y === this.dirtSpots[i][1]) && (this.dirtSpots[i][2] !== "c")) {
        this.dirtCount += 1
        this.dirtSpots[0].push("c")
      }
    }
  }

  blockX() {
    if (this.hoover.x > this.size[0]) {
      this.hoover.x -=1
    } else if (this.hoover.x < 0) {
      this.hoover.x +=1
    }
  }

  blockY() {
    if (this.hoover.y > this.size[1]) {
      this.hoover.y -=1 
    } else if (this.hoover.y < 0) {
      this.hoover.y +=1
    }
  }

}
