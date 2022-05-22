let num = 100;

// All number operations.

let sqr = num ** 2;
console.log(sqr);

let sqrt = num ** (1/2);
console.log(sqrt);
console.log(15 ** 0.5);

// Math library uses

console.log(Math.round(1.99));
console.log(Math.round(2.50));

// Inbuild values from Math and Number usage
console.log(Math.round((2.60 + Number.EPSILON) * 10)/10);
console.log(2 * Math.PI * 5); // Circumference

n_max = Math.max(5,3,5,8,9,10,0);
n_min = Math.min(5,3,5,8,9,10,0);
console.log(n_max);
console.log(n_min);
console.log("Power 2 ^ 3: ", Math.pow(2,3));

console.log(Math.random()); // From 0 to 1
console.log("Sqrt 10: ", Math.sqrt(10));

// Number object usages

console.log("Is this an integer", Number.isInteger('123'))
console.log("Is this not a number", Number.isNaN(Number.NaN))
console.log("Parse a float", Number.parseFloat(23.45))

// COnvert a date object.
let d = new Date(Date.now())
console.log(d);
console.log(Number(d))

Number('1234') === 1234
console.log("Shows that blank string returns: ", Number(''))
console.log("Shows that null returns: ", Number(null))

// Increament number
num += 2 // It changes source permanently
console.log('New num:', num)