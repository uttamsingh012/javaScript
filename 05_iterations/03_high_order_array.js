//  for of loop

// using for of loop on array
const arr = [1,2,3,4]
for (const num of arr) {
    // console.log(num);
}


// using for of loop on string
const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}






// Map (object)

/* Map is object which hold key value pairs. 
key must be unique whereas value can be repeated
*/

const map = new Map()
map.set('IN', 'India')
map.set('AUS', 'Australia')
map.set('NZ', 'New Zealand')
map.set('NZ', 'New Zealand')
// key should not be repeated
// console.log(map);

// How to use for of loop in map

for (const [key, value] of map) {
    // console.log(key,":", value)
}
// in map we can't use for in loop because map is not iterable
// for (const key in map) {
//     console.log(key);
// }




//  object
const myObject = {
    'game1' : 'nfs',
    'game2' : 'spider man'
}

// object cannot iterate in for of loop
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }




// how to iterate object 
// object can be iterate by for in loop
const myObject1 = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"
}

for (const key in myObject1) {
    // print all the keys
    // console.log(key);
    // print value of an object
    // console.log(myObject1[key]);
    // print both key and value together
    // console.log(`${key} shortcut is ${myObject1[key]}`);
}

// using for in loop in array for iteration
const nums = [1,2,3,5,7,1]
for (const key in nums) {
    // console.log(nums[key]);
}

/*
Notes: In for of loop be can directly print the key to get the value of given array 
        but in for in loop be can use array[key] to print the array value because 
        of be print directly key we get the index of agiven array.
*/
