// OO delegation
function Car(name) {
  this.brand = name;
}
Car.prototype.identify = function() {
  return "I am " + this.brand;
};
function Toyoto(name) {
  Car.call(this, name);
}
Toyoto.prototype = Object.create(Car.prototype);
Toyoto.prototype.speak = function() {
  console.log(`Hello, ${this.identify()} .`);
};
var car1 = new Toyoto("toyoto ABC");
var car2 = new Toyoto("toyoto XYZ");
car1.speak();
car2.speak();

// OLOO delegation
var Car = {
  init: function init(name) {
    this.brand = name;
  },
  identify: function identify() {
    return "I am " + this.brand;
  }
};
var Toyoto = Object.create(Car);
Toyoto.speak = function() {
  console.log(`Hello, ${this.identify()} .`);
};
var car1 = Object.create(Toyoto);
car1.init("toyoto ABC");
var car2 = Object.create(Toyoto);
car2.init("toyoto XYZ");
car1.speak();
car2.speak();

//ES6 class
class Car {
  constructor(name) {
    this.brand = name;
  }
  identify() {
    return "I am " + this.brand;
  }
}
class Toyoto extends Car {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`Hello, ${this.identify()} .`);
  }
}
var car1 = new Toyoto("toyoto ABC");
var car2 = new Toyoto("toyoto XYZ");
car1.speak();
car2.speak();

// OO Introspection
Toyoto.prototype instanceof Car; // True
Object.getPrototypeOf(Toyoto.prototype) === Car.prototype;
Car.prototype.isPrototypeOf(Toyoto.prototype);

car1 instanceof Car;
car1 instanceof Toyoto;
Object.getPrototypeOf(car1) === Toyoto.prototype;

Car.prototype.isPrototypeOf(car1);
Toyoto.prototype.isPrototypeOf(car1);

// OLOO Introspection
Car.isPrototypeOf(Toyoto);
Object.getPrototypeOf(Toyoto) === Car;

Car.isPrototypeOf(car1);
Toyoto.isPrototypeOf(car1);
Object.getPrototypeOf(car2) === Toyoto;
