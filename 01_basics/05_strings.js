const name = "uttam"
const repoCount = 50

// Outdated method
// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)


// another method to declared the string

const gameName = new String('uttam-singh')
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // give the string at 2nd index

console.log(gameName.indexOf('t'));  // give the index of string at 't'

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)  // 
console.log(anotherString);

const newStringOne = "    Uttam   "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim remove the extra starting and ending space


const nameOne = "uttam"
console.log(nameOne.replace('a','A'));

console.log(nameOne.includes('singh'));   // because there is 'singh' word is present

console.log(gameName.split('-'));   // convert string into array on the basic of '-'

