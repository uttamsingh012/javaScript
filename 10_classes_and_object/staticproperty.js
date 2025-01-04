class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    // if you don't want to give the access of createId to the user use static keyword
     static createId(){
        return `123`
    }
}

const uttam = new user("uttam")
// console.log(uttam.createId())

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }

}


const st = new Teacher("phone", "oppo@.com")
console.log(st.logMe())