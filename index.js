const Room = require('./src/Room')
const Hoover = require('./src/Hoover')
const Input = require('./src/Input')

const hooverRun = function () {
  let input = new Input();
  input.parse('./input.txt');
  input.separate();
  let room = new Room(input.roomSize, input.dirtSpots, input.hooverPosition, input.directions);
  room.hooverMove(room.directions);
  console.log(room.hoover.position.join(' '));
  console.log(room.dirtCount);
}();
