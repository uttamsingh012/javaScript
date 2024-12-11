// array

const myArr = [0, 1, 2, 3, 5]
const myHero = ["hanuman", "ram"]

const myArr2 = new Array(2,3,5,1)
console.log(myArr[1]);
// console.log(myArr2(2));


// Array Methods

myArr.push(7)
console.log(myArr);

myArr.unshift(9)  // adding 9 in 0th index
myArr.shift()     // pop element from 0th index
console.log(myArr);

console.log(myArr.includes(9));  // find array has 9 or not true/false


const newArr = myArr.join() // array in converted into string using comma(,)  seperated

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);  
console.log(myn2);