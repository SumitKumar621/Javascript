//ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}

const bbg = new User("mona","mona@google.com","123")

console.log(bbg.encryptpassword())
console.log(bbg.changeusername())