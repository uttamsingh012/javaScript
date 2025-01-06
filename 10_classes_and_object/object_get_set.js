const user = {
    _email: 'uttam@google.com',
    _password: 'abc',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(user)
console.log(obj.email);
