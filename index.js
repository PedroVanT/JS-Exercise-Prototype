/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.stomach = [];
}

Person.prototype.eat = function(edible){ 
    
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
}

Person.prototype.poop = function(){
   this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

const person1 = new Person('Pedro', 19);
const person2 = new Person('Matias', 28);
const person3 = new Person('Lebron', 35);

console.log(person1.toString());
console.log(person2.toString());
console.log(person3.toString());


person1.eat('steak');
person2.eat('Muffin');
person3.eat('Apple');

console.log(person1.stomach);
console.log(person2.stomach);
console.log(person3.stomach);


person1.poop();
person2.poop();
person3.poop();


console.log(person1.stomach);
console.log(person2.stomach);
console.log(person3.stomach);




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car (model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
}
Car.prototype.drive = function(distance) {
  this.totalMiles = this.milesPerGallon * this.tank;
  this.odometer += distance;
  this.milesLeft = this.totalMiles - distance;

  if (this.odometer >= this.totalMiles){
    console.log(`I ran out of fuel at ${this.odometer} miles!`)
    return this.tank = 0, this.milesLeft = 0, this.odometer = this.totalMiles;
  }
  else {
    return (this.tank = this.tank - (this.odometer / this.milesPerGallon))
  }
  
}

const car1 = new Car('Lambo', 20);

car1.fill(10);
console.log(car1);

car1.drive(201);
console.log(car1);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {

}


// const baby1 = new Baby('Tom', 1, ball)


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Object Binding = if you use 'this' w/o giving it context, it defaults to the window unless you're in strict mode and will return undefined.
  2. Implicit Binding = when you call a function, and there is an object and
  3. Explicit Binding = 
  4. New Binding = 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
