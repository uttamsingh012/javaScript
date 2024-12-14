const useremail = "utam@google.com"
const user = ""

 if (user) {
    console.log("got user email")
 } else{
    console.log("not found")
 }

// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", " ", "false", [], {}, function(){} 

const array = []
if (array.length==0) {
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("empty object")
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 15
val1 = undefined ?? 20
val1 = null ?? 30 ?? 40
console.log(val1);

// terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")