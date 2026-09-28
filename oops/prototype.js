// let myname = "Sumit kumar   "

// console.log(myname.length)

// let myhero = ["thor","spiderman"]

// let heropower = {
//     thor : "hammer",
//     spiderman : "spiky",

//     getsuperpower :  function(){
//         console.log(`the super power of spiderman ${this.spiderman}`)
//     }
// }

// Object.prototype.func = function(){
//     console.log(`the bulletpower is present to all`)
// }

// myhero.func()


const teacher = {
    makevideo : true
}

const teachingsupport = {
    isavailable : false
}

const TAsupport  = {
    makeassgn : "JS",
    fulltime : true,
    __proto__ : teachingsupport
}

teacher.__proto__ = user

Object.setPrototypeOf(teachingsupport,teacher)

