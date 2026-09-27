let a = 300

if(true){
    let a = 30
    const b = 50
    //console.log("Inner: ",a)
}

//console.log(a)

function one(){
    const username = "Sumit kumar"

    function two(){
        const website = "Yt"
        console.log(website)
    }

    two()
}

//one

const num = 4

function addone(num){
    return  num  +1
}

const addtwo = function(num){
    return num + 2
}

console.log(addone(num))
console.log(addtwo(num))