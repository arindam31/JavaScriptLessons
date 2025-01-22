'use strict';
// ********* Functions **********
/* 
A function without a return statement returns undefined
*/

// Function with NO argument
function useless() {
	console.log("This is a function that does not take an argument");
}

// function with ONE argument
function printName(user_name) {
	console.log("Name is", user_name);
}


// function that returns something.
function sum(a, b) {
	return a + b;
}

// Function showing word operations.
// The word is broken as a list, reversed , then joined to reform a
// reversed word.
function isPalindrome(word) {
	var newWord = word.split().reverse().join()
	if (word == newWord) {
		return true
	} else {
		return false
	}
}

// Anonymous functions example: factorial generator.
var factorial = function (n) {
	let s = 1; // Local scoped variable.
	for (let i = n; i > 0; i--) {
		s = s * i;
	}
	return s;
}

// Immediately invoked functions. No need to call the function
// after creating it. It will be called immediately.
const num = 7; // Global scoped const variable.
var prime = (function (n) {
	let div = true;
	for (let i = 2; i < n / 2; i++) {
		if (n % i == 0) {
			div = false;
			break;
		}
	}
	return div;
})(num) // NOTE THIS PART.

// Block scope for variables.
function logScope() {
	var localVar = 10

	if (localVar) {
		let localVar = "I'm different:"; // The let allows re-defining the same variable.
		console.log(localVar);
	}
	console.log(localVar);
}


// All functions called here.
useless();
printName("Patil");
console.log("The sum is:", sum(10, 20));
console.log("The word abba is palindrome", isPalindrome("abba"));
console.log('Factorial of 4:', factorial(4));
console.log('Calling just factorial without parenthesis:', factorial);
console.log('Immediate invoked fn . the result for no 7 is:', prime);
console.log("Calling function logScope to see scope of variables in a function.")
logScope();
