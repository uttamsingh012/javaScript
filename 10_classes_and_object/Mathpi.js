const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5   // we can't overwrite the Math.PI value
// console.log(Math.PI)


// declare object
// const mynewObj = Object.create(null)

const obj = {
    name: "Uttam",
    age: 22,
    isAvailable: false,

    order: function(){
        console.log("obj not create");
        
    }
}

// console.log(obj)

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: true  // enumerable: true-: now it is available inside the for of loop,
    //  if we use false we can't access the name property 
})
// now no one change the name property in future
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))


for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function'){
        console.log(`${key}, ${value}`)
    }
}