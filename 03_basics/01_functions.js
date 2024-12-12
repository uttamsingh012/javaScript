// function sayMyName() {
//     console.log("U");
//     console.log("T");
//     console.log("T");
//     console.log("A");
//     console.log("M");
// }
// sayMyName  //function reference
// sayMyName()  // function execution

function addTwoNumbers(num1, num2){    // num1, num2 =>parameters
    console.log(num1 + num2);
}
addTwoNumbers(3, 4);  // 3, 4 => arguments



function addtwonumbers(nums1, nums2){
    // let result = nums1 + nums2
    // return result
    return nums1 + nums2
}
// scope => both result are different one is written inside the function and other is written outside the function
const result = addtwonumbers(4, 5)
console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}
const value = loginUserMessage("Uttam")
console.log(value);

console.log(loginUserMessage("utam")); // undefined


function calculateCartPrice(val1, val2, ...number1){
    return number1
}
console.log(calculateCartPrice(200, 400, 500, 700, 900, 1100));
// val1 => 200, val2 => 400, and remaining value store in rest operator(...numbers1)


// object
const user = {
    username1: "Uttam",
    price: 199
}

function handleObject(anyObject){
    console.log(`usernames is ${anyObject.username1} and price is ${anyObject.price}`);
}
// handleObject(user)  // pass object
// or
handleObject({
    username1: "Uttam Singh",
    price: 999
})

const myNewArray = [200, 300, 400, 100]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
// or
console.log(returnSecondValue([200, 300, 400, 100]));