// ES6

class user1 {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const name = new user1("saksham", "saksham@google.com", 123)

console.log(name.encryptPassword());  //Password is encrypt
console.log(name.changeusername());  //Password is encrypt


// Behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const sin = new user("uttam", "uttam@google.com", "123")
console.log(sin.encryptPassword());
console.log(sin.changeusername());
