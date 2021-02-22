// Function.prototype.inherits = function (parent) {
//   function Surrogate() {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

function MovingObject(speed, weight, dir) {
  this.speed = speed;
  this.weight = weight;
  this.dir = dir;
}

function Ship(name) {
  this.name = name;
}
// Ship.inherits(MovingObject);
Ship.prototype = Object.create(MovingObject.prototype);

function Asteroid(numOfHoles) {
  this.numOfHoles = numOfHoles;
}
// Asteroid.inherits(MovingObject);
Asteroid.prototype = Object.create(MovingObject.prototype);

Ship.prototype.blastOff = function () {};

Asteroid.prototype.strikePlanet = function () {};

MovingObject.prototype.calculateTrajectory = function () {};

const s = new Ship("Brad's Ship");

const a = new Asteroid(56);

const mO = new MovingObject(10, 15, "West");

console.log(s.name);
console.log(a.name);
console.log(mO.name);

console.log(s.blastOff());
// console.log(a.blastOff());
// console.log(mO.blastOff());

// console.log(s.strikePlanet());
console.log(a.strikePlanet());
// console.log(mO.strikePlanet());

console.log(s.calculateTrajectory());
console.log(a.calculateTrajectory());
console.log(mO.calculateTrajectory());
