const user = {
    username: "Uttam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user derails from database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.getUserDetails());
// console.log(user.username);

// console.log(this);



function User(username, loginCount, isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this
}

const userOne = new User("Uttam", 12, true)
const userTwo = new User("Saksham", 9, true)

console.log(userOne.constructor)
// console.log(userTwo);


/*
new = 
step-1- firstly empty new object create (instance)
step-2- constructor function call due to new key word
step-3- this keyword inject

*/