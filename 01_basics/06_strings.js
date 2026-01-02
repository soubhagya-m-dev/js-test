const name = "Sam"
let repoCount = 50

// proper way to write string
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
//advanced way to declare string
const gameName = new String("underAchiever91") 
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); //represents as a object

console.log(`length of the variable gameName is ${gameName.length}`);
console.log(`${gameName.toUpperCase()}`);
console.log(`${gameName.toLowerCase()}`);
console.log(`${gameName.charAt(0)}`); //show character in 0 index
console.log(`${gameName.indexOf("A")}`); //show the index of A

const subName = gameName.substring(0,5)
console.log(subName);

const anotherName = gameName.slice(-15,5)
console.log(anotherName);

const trimName = "   Samuel  "
console.log(trimName.trim()); //remove whitespaces
console.log(trimName.trimStart());
console.log(trimName.trimEnd());

const url = "https://%20samrep2monica"
console.log(url.replace("%20","-")); //replace one value with another

console.log(`${url.includes("samr")}`); //if this value present gives true

const sentence = new String("There is a quick brown fox.")
console.log(sentence.split(" ",6)); //divides into a array















