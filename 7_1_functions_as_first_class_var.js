/*
Javascript as a language supports first class functions.
Meaning , we can save a function in a variable.

A variable can be used in many things.
A variable can be passed to another functions.
A variable can be returned from inside a function.
*/
'use strict';

// Example: Assigning a function to a variable
function formatter(text) {
    return `** ${text} **`;
}

function ex2(list_str, formattingFn) {
    let list_formatted = [];
    for (let word of list_str) {
        list_formatted.push(formattingFn(word))
    }
    return list_formatted;
}

console.log(ex2([1, 2, 3], formatter))

// Example: return function from function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const res1 = multiplier(10);
console.log(res1(5))