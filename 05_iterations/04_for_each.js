const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach is asking for callback function

// using arrow method to write function (callback using arrow function)
coding.forEach((items) => {
    // console.log(items)
});


// or there are multiple method to write function
// it is callback function so it hasn't function name (function greet())
coding.forEach( function (val) {
    // console.log(val)
})



// or
function printMe(items){
    console.log(items)
}
coding.forEach(printMe)

// foreach function can also print the index and array
coding.forEach( (items, index, array) => {
    console.log(items, index, array);
});




// Multiple objects in single array
const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})