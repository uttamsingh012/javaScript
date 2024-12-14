//  Immediately Invoked Function Expressions (IIFE)

(function new1() {
    // named iife (new)
    console.log("DB CONNECTED")
}) ();



( (name) => {
    console.log(`DB CONNECTED  TO ${name}`)
} ) ("uttam");


let val1 = 10
let val2 = 5
function sum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = sum(val1, val2)
let result2 = sum(3, 5)
console.log(result1);
console.log(result2);