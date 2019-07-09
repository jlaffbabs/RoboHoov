class Hoover {
  constructor(hooverPosition) {
    this.x = hooverPosition[0];
    this.y = hooverPosition[1];
    this.position = [this.x, this.y]
  }

  move(directions) {
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] === "N") {
        this.y += 1
      } else if (directions[i] === "S") {
        this.y -= 1
      } else if (directions[i] === "E") {
        this.x += 1
      } else if (directions[i] === "W") {
        this.x -=1
      }
    }
  }
}
