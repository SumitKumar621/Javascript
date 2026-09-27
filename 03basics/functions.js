function myfunc(){
    console.log("This is Sumit kumar")
}

//myfunc()

// function addnum(num1,num2){
//     console.log(num1 + num2)
// }
function addnum(num1,num2){
    let result = num1 + num2
    return result
}

const sum = addnum(3,4)

//console.log("Result: ", sum)

function loggin(username){
    return `${username} just logged in`
}

//console.log(loggin("sumit"))

function calculatecartprice(...num){ // ... -> rest operators
    return num
}

console.log(calculatecartprice(200,400,500))

const user = {
    username : "Sumit kumar",
    price : 299
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}` )
}

handleobject(user)

