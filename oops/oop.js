const user = {
    username : "Sumit kumar",
    login : 8,
    signedIN : true,

    getUserDetails: function(){
        //console.log("User data done")
        console.log(`username: ${this.username}`)
    }
}


console.log(user.username);
console.log(user.getUserDetails())


//----CONSTRUCTOR FUNCTION-------
function User(username,age,ismature){
    this.username = username,
    this.age = age,
    this.ismature = ismature

    //return this
}

const user1 = new User('Sumit kumar',21,true);
const user2 = new User('Mona',20,true)

console.log(user1)
