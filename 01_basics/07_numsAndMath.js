const score = 100

const balace = new Number(500)
console.log(`score : ${score}`);
console.log(`balance value is ${balace}`);

// Number to string conversion
const stringConversion = balace.toString()
console.log(typeof stringConversion);

console.log(balace.toString().length); //string length

//use of toFixed()
const decValue = 180.89453
console.log(decValue.toFixed(2)); //take fixed digit of number after point

//toPrecision()
const amt = 1820.86
const lengthAmt = amt.toString().length
console.log(amt.toPrecision(lengthAmt-3));
//here i perform roundoff operation any amount here roundoff make sure the amt value have two digits fixed numbers after decimal


//toLocaleString used for commas in big numbers
const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));


//+++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++
console.log(Math.abs(-56)); //Negetive to positive conversion
console.log(Math.round(4.5)); //round off
console.log(Math.floor(5.8)); //ALWAYS ROUND OFF TO BOTTOM value
console.log(Math.ceil(5.2));  //always round off to top value
console.log(Math.sqrt(25));
console.log(Math.pow(25,2));
console.log(Math.min(10,20,40,30));
console.log(Math.max(10,20,40,30));

//random can generate decimal value between 0 to 1
//formula for games where randoms number are generated
const min = 1
const max = 6
console.log(`random value : ${Math.floor(Math.random() * (max - min + 1)) + min}`);




