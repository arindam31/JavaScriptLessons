
// ********** Arrays ************************
var colors;
colors = ["red", "blue", "green"];
names = new Array("John", "Adam", "Eva");
misc_things = ["Ali", 1, 0, 8.5, true]

// Fetching from array.
console.log(colors[0]);

// Replace an element from array
colors[1] = "magenta"
console.log(colors);

// Property: Length of array.
console.log("Length of colors array is", colors.length);

// Functions available for an array
console.log("After sort:", colors.sort()); // Sort permanently
console.log("Reverse list", colors.reverse()); // Reverse permanently

// Membership check
console.log("Colors has color red?:", colors.includes('red'))

// ****** Remove items from list **********
// Remove 1st item from array (from right to left side).
colors.shift()
console.log("Shift method", colors);

// Add new items at the head....items inserted at index 0 one by one.
colors.unshift('purple', 'white')
console.log("Unshift method", colors);


// Add new items at the tail end....items appended.
colors.push("black", "pink")
console.log("Push method", colors);

// Remove last item.
colors.pop()
console.log("pop method", colors);


// Remove items from a specific position (or remove by index). splice(pos, n)
console.log("Splice method 1 to 3", colors.splice(1, 2));
console.log("After splicing, this remains", colors)

// Create a copy of array.
var newColors = colors.slice()
console.log("Copied array", newColors);

// ES6 way to copy an array.
var new_colors = [...colors]
console.log("Copied array again", new_colors);

// Find position index of item.
console.log("IndexOf method: ", colors.indexOf("black"));

// Join list items using a separator
console.log("Join method: ", colors.join(";"))

// Map function available in arrays.
console.log("Map method of array")
let nums = [1, 2, 2, 4, 3, 2, 5, 6]
let new_num = nums.map(num => { return num + 10 })
console.log(new_num)

// Maps with num and index.
console.log("Map method of array with index")
let new_num_index = nums.map(
    (num, index) => { // If there are more than 1 arguments, enclose in ().
        return { num, index }
    }
);
console.log("Result map with index:", new_num_index)

// More examples of map usage.
let all_to_str = nums.map(num => { return num.toString() })

// ITERATING an array.
//The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
//The for...of statement iterates over values that the iterable object defines to be iterated over.

console.log("Iterating over an array")
for (const item of colors) { // Note: OF is correct. NOT "in" . "in" will print indexes...whereas "of" will give actual items.
    console.log(item);
}

console.log("Convert the array to a single string:", nums.toString(), typeof (nums.toString()))

// Merging two arrays

// Method 1
a = new Array(1, 2, 3) // Bad idea..dont use new Array..use = []
b = [7, 8, 9, 1]
b.forEach((item) => { a.indexOf(item) ? a.push(item) : item }) // Works but bad idea...still dont know why.
console.log('Merging two arrays: Method 1: With forEach')
console.log(a)

// Method 2: Use ES6 spread operator.
c = [...a, ...b]
console.log('Merging with use of Es6')
console.log(c);

// Looping with forEach
text = ''
a.forEach((num) => { text += "<p>" + num + "</p></br>" });
console.log(text);

// Create an array using from method
var my_sp_array = Array.from([1, 2, 3], x => x * 10)
console.log(my_sp_array)

// Concat example
l1 = [1, 2, 3, 4]
l2 = [5, 6, 7, 8, 9, 10]
var concat_result = l1.concat(l2)
console.log(concat_result);

// Sum of an array
console.log('Sum using reduce')
console.log(l1.reduce((x, y) => x + y))

// Count of an item in array
console.log('Count of elements in array')
dupl_array = [1, 1, 2, 2, 3, 3, 4];
var ans = Array.from(new Set(dupl_array)).map(value => { value: dupl_array.filter(item => item == value).length })

console.log(ans.keys())


// Getting unique elements array from another array.
console.log('Get unique elements of an array!')
dupl_array = [1, 1, 2, 2, 3, 3];
var unique_array = new Set(dupl_array);
console.log([...unique_array]);