const fs = require('fs');

class Input {
  constructor() {
    this.data = []
  }

  parse(data) {
    var info = fs.readFileSync(data).toString()
    var stringInfo = info.split('\n');
    this.data.push(...stringInfo)
    this.data.pop()
  }
}

module.exports = Input;
