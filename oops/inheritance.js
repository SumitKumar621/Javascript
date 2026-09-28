class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email = email,
        this.pass = pass
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new teacher("Mona","mona@google.com","123")

chai.addcourse()

const dontknow = new User("Sumit kumar")

dontknow.logMe()