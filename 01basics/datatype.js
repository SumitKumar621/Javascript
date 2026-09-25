let name = "Sumit Kumar"
let age = 18
let flag = true
//symbol => unique


//object

//console.log(typeof age)

//primitive dATATYPE (STACK MEMORY)

const id = Symbol('123')
const anotherid = Symbol('123')
let value1 = null
let value2 = undefined

//console.log(id === anotherid)

// Non primitive (Heap Memory)

// array
const arr = ["Sumit","kumar","mona"]

//object

let myobj = {
    name: "Sumit kumar",
    age: 21,
    gf: "Mona"
}

// function

const myfunc = function(){
    console.log("Hello sumit kumar"); 
}

//console.log(typeof arr) // object
// console.log(typeof myobj) // object
// console.log(typeof myfunc) // function
// console.log(typeof value1) // null -> object
// console.log(typeof value2) // undefined -> undefined

let user1 = {
    name: "sumit",
    email: "sumit@google.com",
    age: 21
}

let user2 = user1;

console.log(user1.name)
console.log(user2.name)


