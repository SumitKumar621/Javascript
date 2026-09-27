const user  = {
    username : "Sumit kumar",
    price: 999,
    welcomemsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomemsg()
// user.username = "Mona"
// user.welcomemsg()
// console.log(this)

const chai = () => {
    let username = "sumit"
    console.log(this)
}

//chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addtwo(2,3))

//const addtwo = (num1,num2) =>  num1 + num2
const addtwo = (num1,num2) =>  (num1 + num2) // IF WE USE CURLY BRACKET THEN WE HAVE TO USE RETURN 
                                            // BUT IN CASE OF NORMAL BRACKET WE DONT HAVE TO USE THE RETURN 

console.log(addtwo(2,3))