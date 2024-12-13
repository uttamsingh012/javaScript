// global scope (global value can also available in block scope)
var c = 300 

let a = 300
// block scope (but block scope can't be available at global scope)
if (true) {
    let a=10
    const b=20
    var c= 30
    console.log("block scope  ", a);
}

console.log("global scope ",a);
// console.log(b);
console.log(c);



// Scope level and mini hoisting

function one(){
    const username = "Uttam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()



if (true) {
    const username = "Uttam Singh"
    if (username === "Uttam Singh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);




//  ++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}


addtwo(3)
const addtwo = function(num){
    return num + 1
}