//singletons Object.create() cnstructor method

//object literals

const mySym  = Symbol("key1")

const jsUser = {
    name : "Sam",
    "full name" : "Sam Colt",
    [mySym] : "myKey1", //decleration of symbol in obj
    age : 22,
    location : "Kolkata",
    email : "Sam@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Thursday", "Friday"]
}
//how to access objects values
//console.log(jsUser.email);
//console.log(jsUser["email"]);
// //console.log(jsUser.full name); //we can't write this if key has space
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

jsUser.email = "sam@microsoft.com" //changing the value
//console.log(jsUser["email"]);
//Object.freeze(jsUser) //after freezing a object we can't update it's value
//jsUser.email = "Sam@github.com" //value does not change
//console.log(jsUser);

jsUser.greeting = function () {
    console.log(`Hello Js user ${jsUser["full name"]}`);
}
jsUser.greeting()

console.log(jsUser.greeting);





