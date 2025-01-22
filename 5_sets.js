'use strict';
/* Sets are data structures. They only store unique values. Order is not important as in an array.
Sets do not supporting indexing.
 We cannot order a set. 
 Sets are O(1)

 When to use:

-- We need unique values from an array.
-- 

 */

// Creating a set
var nameSet = new Set() // This is the only way.
var setWithIterable = new Set(['1', 'b', '%'])
var setFromString = new Set("JohnDoe")

console.log(nameSet)
console.log(setWithIterable)
console.log(setFromString) // Note that duplicates are not there in the result.

// Editing a set. Can't do that.

// Adding to a set
nameSet.add(100)
nameSet.add('abc') // Things are added from tail end.

nameSet.add(['x', 300, '£'])
console.log(nameSet)

// Count of items in set
console.log(nameSet.size)

// Membership of value
console.log('Name set has 100:', nameSet.has(100))
console.log('Name set do not has 1000', !nameSet.has(1000))

// Removing from a set: 2 ways : delete, clear
nameSet.delete('%')
console.log('After removing £: ', nameSet)
nameSet.clear() // Set is empty after this.
console.log('After clear: ', nameSet)

// Converting set to list
console.log('convert to array:', [...set_from_string])

// Iterating
for (let val of setWithIterable) {
    console.log(val);
}

const private = 123;