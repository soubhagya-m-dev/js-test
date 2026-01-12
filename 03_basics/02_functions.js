const cartValueFinder = function (val1,...products) {
    return products
}
//console.log(cartValueFinder(100,500,2000,850,960))
/*
Here ...products is rest operator where multiple values given in arguments it take all the values and return the values in a array, and  here "val1" is a parameter which will take first value and rest are taken by "products" rest operator
*/


//passing object's value to a function
const userCheckoutDetails = {
    user1 :{
        username : "Sam",
        cartPrice : 890
    },
    user2 : {
        username : "Ram",
        cartPrice : 1890
    }
}
const checkout = function (anyobject) {
    console.log(`${anyobject.user2.username}'s order value is ${anyobject.user2.cartPrice}`);
}
//checkout(userCheckoutDetails)


//passing array's value to a function
const unsortedArray = [5,8,2,9,6]

const secondHighestNumber = function (anyarray) {
    let sortedArray = anyarray.sort()
    return sortedArray[sortedArray.length-2]
}
const secndVal = secondHighestNumber(unsortedArray)
console.log(`Second highest value is ${secndVal}`);
