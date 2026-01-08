const marvelHeros = ["Thor", "HawkEye", "BlackWidow"]
const dcHeros = ["BatMan", "SuperMan", "Flash"]

//marvelHeros.push(dcHeros)

//concat
const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros);
//spread
const num1 = [0,1,2]
const num2 = [3,4,5]
const num3 = [6,7,8,9]
const allNum = [...num1, ...num2, ...num3]
//console.log(allNum);
//concat and spread do same, spread(...) better because applicabe on multiple arrays and concat only for two 

//flat
const anotherArray = [1,2,3,[4,5],6,[7,[8,9]],0]
const usableAnotherArray = anotherArray.flat(Infinity)
//console.log(usableAnotherArray); //return a new array all the elements in same level

//console.log(Array.isArray("Sam"));
//console.log(Array.from("SAM"));
//console.log(Array.from({name:"Sam",gender:"M",age:89})); //interview
/*
isArray is checking it is array or not
from convert to array
if a object is given then it provides a empty array
*/

const score1 = 100
const game = "cricket"
const isPlayed = true
const countryPlayed = ["India", "England", "Australia"]
//const ofArray = Array.of(game, isPlayed, score1, countryPlayed)
console.log(ofArray);
//sumup all types of variables in a array







