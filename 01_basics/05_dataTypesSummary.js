// datatypes are two types primitive and non primitive

// 1. primitive 7types String Number Boolean null undefined Symbol BigInt

// 2. reference (non primitive) array, objects, functions

// JavaScript is a dynamically typed language. This means that you do not   need to explicitly declare the data type of a variable when you create it

const name = "Sam Colt"
const num = 125
const isLoggedIn = false
const temp = null
let logInInfo

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId); //false both the value are same but still unique

const bigNum = 16418464351534543512n
console.log(typeof bigNum); //bigint

const myArray = ["StrangerThings", "Asur", "Panchayet"]
const myObj = {
    name : "Sam",
    age : 22,
    isMarried : false
}
const myFunction = function () {
    console.log("Just for fun");
}
myFunction() //all the non primitive datatype typeof is object and for the function it is function object


