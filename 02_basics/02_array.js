const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)


// using concat method to add two array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// using spread method to add two array
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [4, 5]]]
//  flat is used to removed the array inside array flat(how many depth solve the array)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



// find the given input is array or not
console.log(Array.isArray("uttam"))
// convert string into array
console.log(Array.from("uttam"));

// it can't directly convert the string into array
console.log(Array.from({name: "hitesh"}))  // interesting case


// convert multiple value into Array
let scored1 = 100
let scored2 = 200
let scored3 = 300

console.log(Array.of(scored1, scored2, scored3));