/* Sets are data structures. They only store unique values. Order is not important as in an array.
Sets do not supporting indexing.
 We cannot order a set. 
 Sets are O(1)

 When to use:

-- We need unique values from an array.
-- 

 */

// Creating a set
var name_set = new Set() // This is the only way.
var set_with_iterable = new Set(['1', 'b', '%'])
var set_from_string = new Set("JohnDoe")

console.log(name_set)
console.log(set_with_iterable)
console.log(set_from_string) // Note that duplicates are not there in the result.

// Editing a set. Can't do that.

// Adding to a set
name_set.add(100)
name_set.add('abc') // Things are added from tail end.

name_set.add(['x', 300, '£'])
console.log(name_set)

// Count of items in set
console.log(name_set.size)

// Membership of value
console.log('Name set has 100:',name_set.has(100))
console.log('Name set do not has 1000', !name_set.has(1000))

// Removing from a set: 2 ways : delete, clear
name_set.delete('%')
console.log('After removing £: ',name_set)
name_set.clear() // Set is empty after this.
console.log('After clear: ',name_set)

// Converting set to list
console.log('convert to array:', [...set_from_string])

// Iterating
for (let val of set_with_iterable){
    console.log(val);
}
