const accountId = 55428973
let accountEmail = "newaccount@gmail.com"
var accountPassowrd = "987654"
accountCity = "Kolkata"
let accountState;
// accounId = 3
accountEmail = "oldaccount@gmail.com"
accountPassowrd = "123456"
accountCity = "Goa"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])
