const nonSingletonObject = {}

const singletonObject = new Object()
//console.log(nonSingletonObject,singletonObject); //interview 
//both the object give same result

const tinderUser = {}

tinderUser.id = "xyz980" //insert keys and value in a empty object
tinderUser.name = "chapri420"
tinderUser.isLoggedIn = false
//console.log(tinderUser);


//object nesting
const regularUser = { 
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Sam",
            lastname : "Colt"
        }
    }
}
//console.log(regularUser.fullname.username.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

//const obj3 = {obj1, obj2}
//console.log(obj3);


//assign method
const obj4 = Object.assign({}, obj1, obj2, obj3)
//in assign first object is target object all the other object paste values on it, for this there are always use a empty object at the initial position in assign method
//console.log(obj4);
//console.log(obj1);

//spread operator
const obj5 = {...obj1, ...obj2, ...obj3} //more userfriendly than assign
//console.log(obj5);


//getting the info of object in arrays
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //checks a object has a mentioned property or not


//getting values from database, multiple values in a array
const users = [
    {
        id : 1,
        email : "S@gmail.com"
    },
    {
        id : 2,
        email : "M@gmail.com"
    }
]
// console.log(users[0].email);

//object destructuring 
const course = {
    courseName : "JS master",
    price : 998,
    courseInstructor : "Mr. Sam Colt"
}
console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor); //this all prints the same but using less words

/*
api simplification
website : https://randomuser.me/ here get api
website : https://jsonformatter.org/ here understand the api
*/













