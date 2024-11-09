const accountId = 55428973      // accountId is a constant, it won't change
let accountEmail = "newaccount@gmail.com"      // we might change the email later, so use let
var accountPassword = "987654"
accountCity = "Kolkata"

let accountState;
// accounId = 3
accountEmail = "oldaccount@gmail.com"
accountPassword = "123456"
accountCity = "Goa"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);     // prints the accountId
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
