class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(mail){
        this._email = mail
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}uttam`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const utam = new User('uttam@gogle.com', 'abc')
console.log(utam.password)
console.log(utam.email)