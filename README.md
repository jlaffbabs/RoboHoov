# RoboHoov
## Tray Tech Test

## Description
This Javascript project simulates a Robotic Hoover that follows directions around an
enclosed room and counts how many spots of dirt it has cleaned as well as
retaining its location.

## Getting Started
1. Clone this repository `git@github.com:jlaffbabs/RoboHoov.git`
2. Change into directory `cd RoboHoov`
3. Run npm to install dependencies `npm install`
4. As per input.txt, change this file to represent values you want to use, using the same format. The first line should be the room size, followed by the hoover position, followed by as many spots of dirt as required, followed by the hoover directions. Avoid whitespace.
5. Run the project using node `node index.js`
6. The output will be in the console.

## Testing
Run tests using `npm test`

##Process
I built this project in Javascript as I feel most comfortable in it at the
moment. I strictly followed TDD and used Jasmine to test. Initially this was
a Jasmine standalone that ran in the browser but halfway through I switched to
using Jasmine through npm as it made more sense. Responsibilities were
separated into class Objects.
