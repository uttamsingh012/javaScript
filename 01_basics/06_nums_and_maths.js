const score =400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));





// ------------------------------------Maths---------------------------

console.log(Math);
console.log(Math.abs(-4));  // convert neagtive value into positive
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.1)); 555
console.log(Math.floor(4.9));  //4
console.log(Math.max(3,2,7,1)); // 7
console.log(Math.min(6,4,1,9)); // 1

console.log((Math.random()*10)+1);
// Math.random value always come between 0 and 1


console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)  //atleast the value should be greater than min so be add min value
