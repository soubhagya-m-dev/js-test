const sayMyName = function () { //function definition
    console.log("S");
    console.log("A");
    console.log("M");
}
// sayMyName() //function calling

// const addThreeNumbers = function (num1, num2, num3) { //parameters
//     console.log(num1 + num2 + num3);
// }
// const res = addThreeNumbers(3,4,"R") //arguments
// console.log(`Result : ${res}`); //res doesnot have value beacuse it prints does not return 

const addThreeNumbers = function (num1, num2, num3) { //parameters
    return num1 + num2 + num3
}
const result = addThreeNumbers(1,2,3)
//console.log(`Result ${result}`);

const userLogIn = function (username) {
    if (!username) {
        console.log("Kindly give a username");
        return
    }
    return `${username} just logged in!!`
}
//console.log(userLogIn("Sam"));
//console.log(userLogIn()); //undefined just logged in!!

const userLogInDefault = function (username = "Sam") { //default name if no argument is passed then "Sam" will be printed
    if (!username) {
        console.log("Kindly give a username");
        return
    }
    return `${username} just logged in!!`
}
console.log(userLogIn("Sami"));
