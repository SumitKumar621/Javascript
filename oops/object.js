// function multiply5(num){
//     return num * 5
// }

// multiply5.power = 3

// console.log(multiply5(5))
// console.log(multiply5.power)

function createuser(username,score){
    this.username = username,
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const user1 = new createuser("Sumit",123)
const user2 = new createuser("Mona",345)

user1.printme()

