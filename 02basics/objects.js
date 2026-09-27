const sym = Symbol("Key1")

const user = {
    name: "Sumit",
    "Fullname" : "Sumit Kumar",
    [sym]: "Mykey",
    age: 21,
    clg: "IIT Ropar",
    cgpa: 7.9,
    location: "Sikar"
}

// console.log(user.clg)
// console.log(user.age)
// //console.log(user.Full name) // cannot access like this 
// console.log(user["Full name"]) // this is the right way to access
// console.log(user[sym])

user.cgpa = 8
//console.log(user.cgpa)
//Object.freeze(user)
user.cgpa = 9
//console.log(user.cgpa)

user.greeting = function(){
    console.log("Hello")
}

user.greeting2 = function(){
    console.log(`Hello,this is ${this.Fullname}`)
}

console.log(user.greeting())
console.log(user.greeting2())
