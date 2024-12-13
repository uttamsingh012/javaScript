const user = {
    username: "Uttam",
    price: 999,
// to refer the current context use this keyword
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "Saksham"
user.welcomeMessage()

console.log(this);



function one() {
    let username = "uttam"
    console.log(this.username); // undefined
    //  this is always work in object not on function
}
one()

const two = function() {
    let username = "uttam"
    console.log(this.username)
}
two()


// declare arrow function

const arrowfun = () => {
    let username = "uttam"
    console.log(this.username);
    console.log(this);
}
arrowfun()

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//  (if we {} only then we use return keyword)

// implecit return 
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ( {username: "uttam"} )
console.log(addTwo(3, 4));