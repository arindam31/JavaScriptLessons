// ********* Functions **********

// Function with NO argument
function useless() {
	console.log("This is a function that does not take an argument");
}

// function with ONE argument
function print_name(user_name){
	console.log("Name is", user_name);
}


// function that returns something.
function sum(a,b){
	return a + b;
}

// Function showing word operations.
// The word is broken as a list, reversed , then joined to reform a
// reversed word.
function is_palindrome(word){
	var new_word = word.split().reverse().join()
	if (word == new_word) {
		return true
	} else {
		return false
	}
}

// Anonymous functions example: factorial generator.
var factorial = function(n){
	s = 1; // Local scoped variable.
	for (i=n;i>0;i--){
		s = s * i;
	}
	return s;
}

// Immediately invoked functions. No need to call the function
// after creating it. It will be called immediately.
const num = 7; // Global scoped const variable.
var prime = (function(n){
	div = true;
	for (i=2;i<n/2;i++){
	    if (n % i == 0){
			    div = false;
			    break;
		                }
	        }
	return div; 
})(num) // NOTE THIS PART.

// Block scope for variables.
function logScope(){
	var localVar = 10

	if (localVar) {
		let localVar = "I'm different:"; // The let allows re-defining the same variable.
		console.log(localVar);
					}
		console.log(localVar);	
			}


// All functions called here.
useless();
print_name(user_name="Patil");
console.log("The sum is:", sum(10,20));
console.log("The word abba is palindrome", is_palindrome("abba"));
console.log('Factorial of 4:', factorial(4));
console.log('Calling just factorial without parenthesis:', factorial);
console.log('Immediate invoked fn . the result for no 7 is:', prime);
logScope();
