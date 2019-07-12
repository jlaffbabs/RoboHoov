const fs = require('fs');

class Input {
  constructor() {
    this.data = []
    this.roomSize = []
    this.hooverPosition = []
    this.directions = ""
    this.dirtSpots = []
  }

  parse(data) {
    var info = fs.readFileSync(data).toString()
    var stringInfo = info.split('\n');
    this.data.push(...stringInfo)
    this.data.pop()
  }

  separate() {
    this.roomSize = this.data[0].split(' ').map(Number)
    this.hooverPosition = this.data[1].split(' ').map(Number)
    this.directions = this.data.pop()
    var dirt = this.data.splice(2)
    for (var i = 0; i < dirt.length; i++) {
      dirt[i] = dirt[i].split(' ').map(Number)
    }
    this.dirtSpots = dirt
  }
}

module.exports = Input;
