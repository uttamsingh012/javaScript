// let myName = "Uttam     "

// console.log(myName.length)
// console.log(myName.trim().length)
// console.log(myName.truelength)


let myhero = ["spiderman", "thor"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.uttam = function(){
    console.log('Uttam is present in all object')
}

Array.prototype.heyuttam = function(){
    console.log(`uttam says hello`)
}

// heropower.uttam()
myhero.uttam()

// myhero.heyuttam()
// heropower.heyuttam()
// heropower.heyuttam()   //TypeError: heropower.heyuttam is not a function


// Inheritance

const user = {
    name: 'saksham',
    email: 'saksham@google.com'
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'harsh    '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
'harsh'.trueLength()
'icetea'.trueLength()