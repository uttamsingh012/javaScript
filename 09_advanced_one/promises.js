const promiseOne = new Promise(function(reslove,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed")
        reslove()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log("Async task 2")
        reslove()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolved,reject){
    setTimeout(function(){
        resolved({username: "Uttam", email: "uttam@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = false  // true
        if (!error) {
            reslove({username: "Uttam", password: "123"})
        } 
        else {
            reject('ERROR Something went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolved or rejected')
})


const promiseFive = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: 'Uttam', password: '123'})
        }
        else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then()
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        consumePromiseFive.length(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://api.github.com/users/uttam-singh')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E:',error)
//     }
// }
// getAllUsers()

// or (using then and catch)

fetch('https://api.github.com/users/uttam-singh')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))