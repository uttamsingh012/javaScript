// singleton 
Object.create // through constructor method make object that's why it is known as singleton

// object literals

// both methods is used to make object


// object literals

const mysys = Symbol("Key1")

const JsUser = {
    name: "uttam",
    "full name": "uttamsingh",
    // use symbol as a key []
    [mysys]: "myKey1",
    age: 22,
    location: "prayagraj",
    email: "uttam@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

// how to access object
// Method-1
console.log(JsUser.email);
console.log(JsUser["full name"]);
 
// Method-2
console.log(JsUser["email"]);

console.log(JsUser[mysys]);

// how to change object value
JsUser.email = "uttam@amazon.com"
console.log(JsUser.email);

// No one can change the value (freez)
// Object.freeze(JsUser)
JsUser.email = "uttam@gmail.com" // this time the value is not change
console.log(JsUser.email);


console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());