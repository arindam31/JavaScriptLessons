
// All examples of basic Javascript.

//  This is the TYPES section.
// var, let, const
var a = 3;
var b = 4;


var sum = a + b;
console.log(sum);
var active=true;
console.log(active)
var answer=null;
console.log(answer)
var long_text = `This is a really long \ 
text`;
console.log(long_text);
console.log(typeof(active));

//
{
	let some_num = 1000;
}

try{
console.log(some_num);
}
catch(ReferenceError){
	console.log('This shows that a LET declared in curly braces cannot be accessed outside')
}

// String manipulation
var name = "John Adams"


// Conditional statements.
if (a === b) { // Use 3 equals to do a stricter match (types should be same too)
	match = true;
} else {
	match = false;
}

// if (bool) gives a true or false.
if (match) {
	console.log("Match found");
} else{
	console.log("Match failed");
}

var c = 10;
var d = 20;
var e = "10";

if (c != d) { // Use 3 equals to do a stricter match (types should be same too)
	console.log("c not same as d");
} else {
	console.log("c is d");
}

if (c !== e) { 
	console.log("c not exactly same as e");
} else {
	console.log("c is strictly speaking e");
}

// Example of ternary operator.
a == b ? console.log("Match found") : console.log("No Match found");

// Showing how const works.
const num = 100
try{
	num = 102
}
catch(TypeError){
	console.log('Yup...const cannot be modified.')
}
