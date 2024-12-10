//  Primitive
// 7 Categories(call by value) : String, Number, Boolean, Null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 3654125976n

// Reference (Non Primitive type)
//Array, Object, Functions
// Array, Object datatype => Object
// Function => Object Function
const heros = ["shaktiman", "doga", "ironman"];

let myObj = {
    name: "uttam",
    age: 22
}

let myFunction = function() {
    console.log("Hello World");
}


console.log(typeof myFunction)