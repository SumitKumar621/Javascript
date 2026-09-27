// OBJECT SINGLTON

const user = {}

user.id = "123ceb"
user.name = "Sumit"
user.isaged = true

//console.log(user)

const user2 = {
    fullname: {
        username: {
            firstname: "Sumit",
            lastname: "Kumar"
        }
    }
}

//console.log(user2.fullname.username.firstname)

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "c",4 : "d"}

//const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)

// console.log(obj3)

const obj3 = {...obj1,...obj2}
//console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

const course = {
    coursename: "OS",
    price: "499",
    teacher: "Lakshayjain"
}

const {teacher : t} = course

console.log(t)
