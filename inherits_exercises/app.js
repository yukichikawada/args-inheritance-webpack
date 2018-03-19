// Function.prototype.inherits = function inherits(SuperClass) {
//   const Subclass = this;
//   console.log(this);
//   function Surrogate() {}
//
//   Surrogate.prototype = SuperClass.prototype;
//   Subclass.prototype = new Surrogate();
//   Subclass.prototype.constructor = Subclass;
// };

Function.prototype.inherits = function inherits(SuperClass) {
  const Subclass = this;
  Subclass.prototype = Object.create(SuperClass.prototype);
  Subclass.prototype.constructor = Subclass;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
