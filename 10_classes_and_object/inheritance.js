class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const obj = new Teacher("uttam", "uttam@google.com", "124")
// console.log(obj.addCourse())
obj.addCourse()
obj.logMe()

const obje2 = new user("saksham")
obje2.logMe()

console.log(obj === Teacher)
console.log(obj instanceof Teacher)
console.log(obj instanceof user)