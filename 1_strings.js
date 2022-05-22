let word = 'ABCDEFG'

// Split the string as a list of letters.
// It changes the source permanently.

list_letters = word.split('');
console.log('After split: ', list_letters);
word != list_letters


// Slice works with both strings and arrays. It does not affect the source.
console.log(word.slice(0, 2));
console.log(word.slice(0, 3));
console.log(word.slice(2, ));

console.log(list_letters.slice(0, 2));

// Methods of string object.
let person_name = "Johny English"

//1. Find character at index.
console.log(person_name.charAt(0));
console.log(person_name.charAt(person_name.length - 1)); // Proves that index starts from 0

result = person_name.search('o'); // Search returns index
console.log('Searching for letter present',result)

result = 'abcabcabc'.search('o'); // Search returns index -1 if not found
console.log('Search for char not present:',result)

// Join two strings
console.log('Aha' + 'Yumm')

// Concat string to list
console.log('All letters:'.concat(list_letters))

// Concat string to string

console.log('First'.concat('Last'))

// To recreate a string from the array.
console.log(list_letters.join(':'))

let some_text = "  There is some space at both ends  "
console.log('Trimmed text:', some_text.trim())

// Reverse a string
console.log(some_text.trim().split(' ').reverse().join(' '))