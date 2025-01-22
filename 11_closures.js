// Closure is a function inside a function that relies on variables in the outside function to work.

function circumference(radius) {
  pi = Math.PI

  function calculate() {
    return Math.round((Number(2 * pi * radius)));
  }

  return calculate;
}

var theResult5 = circumference(5);
var theResult8 = circumference(8);
var theResult10 = circumference(10);

console.log("circumference of radius 5:", theResult5());
console.log("circumference of radius 8:", theResult8());
console.log("circumference of radius 10:", theResult10());
