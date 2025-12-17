const accountId = 144553
let accountEmail = "soubhagya@amazon.com"
var accountPassword = "abc123"
accountCity = "bangalore" //use let or const before variable
let accountState //if print the variable which doesn't have any value it shows undefined

// accountId = 2 //notAllowed changing constant value
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "sm.sm@gmail.com"
accountPassword = "12341234"
accountCity = "pune"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])