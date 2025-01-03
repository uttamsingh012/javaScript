function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createuser(username, email, password){
    SetUsername.call(this, username)
    // this.username = username
    console.log("called")
    this.email = email
    this.password = password
}

const chai = new createuser("singh", "singh@google.com", "123")
console.log(chai)