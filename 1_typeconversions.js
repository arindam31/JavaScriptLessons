// Number to string

let num = 100;
var s
s = num.toString()
console.log(s, typeof(s));

// types
console.log(typeof(0)) // number
console.log(typeof([])) // object
console.log(typeof("")) // string
console.log(typeof(null)) // null
console.log(undefined) // undefined
console.log(typeof({})) //object
console.log(typeof("0")) // string
console.log(typeof(Number))
console.log(typeof(Number.toString))

// conversions with operators

eq = 2 * "3";
console.log(eq, typeof(eq))

eq = 10 / "4"
console.log(eq, typeof(eq))

eq = "100" - 20
console.log(eq, typeof(eq))

eq = 2 + '3';
console.log(eq, typeof(eq))

eq = 1 + '1' + true
console.log(eq, typeof(eq))

eq = 10 * true
console.log(eq, typeof(eq))
eq = 10 * false
console.log(eq, typeof(eq))

// Comparison

1 == true
0 == false
1 == []
1 == {}
