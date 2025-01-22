// You cannot create a class variable by var or let or const inside a class as per ES6.
// Methods declared inside a class, do not need a 'define' keyword.
// To create an instance of a Class, you need to use the 'new' keyword.

// ******************** Notes ********************************

// Properties are like "variables" attached to classes/objects.
// Methods are like functions attached to classes/objects.

// Below ideas are the old generation ES6 way.
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getTitle() {
    return this.name.toUpperCase();
  }
}

class Male extends Person {
  constructor(name, age) {
    super(name, age, "Male");
  }
}

var p = new Male("ABC", 20);
console.log(p.name);
console.log(p.gender);

// Note: Run this by :  node filename.js
