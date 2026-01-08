/*
JavaScript array-copy operations create shallow copies.
A shallow copy of an object is a copy whose properties share the same references
*/

//decleration of arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["IronMan", "Dr.Strange", "Thor", "CapAmerica"]
const myArr2 = new Array(1, 2, 5, 9, 15)
//console.log(myArr2[0]);

//Array Methods
myArr.push(6) //push element last index of array
//console.log(myArr);
myArr.pop()
//console.log(myArr); //delete last element of array
myArr.unshift(9)
//console.log(myArr); //insert the value at 0 index, all elements of that array shifts by 1 not a good practice load increases in system.
myArr.shift()
//console.log(myArr); //index 0 of the array is removed

//includes
//console.log(myArr.includes(3)); // ask js a value is available? return true
//console.log(myArr.includes(13)) // if value isn't present then give false

//indexof
//console.log(myArr.indexOf(5)); //give the index number
//console.log(myArr.indexOf(91));// if value isn't present then give -1

//join
const newArr = myArr.join() //using this a array can be converted in string
//console.log(newArr);
//console.log(typeof newArr); //string

//slice and splice


 const myA2 = myArr.slice(1,3) //print index 1 to 2
 console.log(myA2);
 console.log("B", myArr); //no change in original array

 const myA3 = myArr.splice(1,3) //print index 1 to 3
 console.log(myA3);
 console.log("C", myArr); //changes in original array
 
 
 















