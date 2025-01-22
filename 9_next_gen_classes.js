// You cannot create a class variable by var or let or const inside a class as per ES6.
// Methods declared inside a class, do not need a 'define' keyword.
// To create an instance of a Class, you need to use the 'new' keyword.

// ******************** Notes ********************************

// Properties are like "variables" attached to classes/objects.
// Methods are like functions attached to classes/objects.

// Below ideas are the new generation ES6 way.
class Person {
  constructor(name, age, gender) {
    name = name;
    age = age;
    gender = gender;
  }

  getTitle = () => this.name.toUpperCase();
}

class Male extends Person {
  name = name;
  age = age;
  gender = "Male";
}

var p = new Male("ABC", 20);
console.log(p.name);
console.log(p.gender);

// Note: Run this using some modern browser. Node (v 10.3.0) cannot run this.
// Or use jsbin.com to run and test this.
