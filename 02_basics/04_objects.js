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



