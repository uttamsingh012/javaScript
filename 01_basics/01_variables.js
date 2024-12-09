const accountId = 1445533
let accountEmail = "uttam@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  // print undefined because value is not declared
// accountId = 2 not allowed because it is stored in const

accountEmail = "ut@hc.com"
accountPassword = "25460"
accountCity = "Bangluru"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


/*
Prefer not to use var
because of issue in block scope{} and functional scope
*/
// or print using table method
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])