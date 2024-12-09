let score = "33abc"
// let score = "abc"
// let score = "uttam"
// let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0


// convert numbers into boolean
let isLoggedIn = 1
let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsloggedIn);
// console.log(booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false
// "uttam" => true


// convert number into string
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);



// ************************ Operations **********************

let value = 3
let negValue = -value
console.log(typeof negValue);
console.log(negValue);



let str1 = "uttam"
let str2 = " singh"

let str3 = str1 + str2
console.log(str3)

// console.log("1" + 2);      //12
// console.log(1 + "2");      //12
// console.log("1" + 2 + 3);  //123 
// console.log(1 + 2 + "3");  //33


// console.log(true);         //true

let num1, num2, num3

num1 = num2 = num3 = 2+2


let gameCounter = 100
console.log(gameCounter++);  //100 first print the previous value (100) and then increment the value(101)
console.log(gameCounter);    //101
console.log(++gameCounter);  //102 first increement and then print
console.log(gameCounter);    //102