// const promiseone = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         console.log("The work is completed");
//         resolve()
//     },1000)
// })

// promiseone.then(function() {
//     console.log("The promise is complete")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise2 complete")
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username : "Sumit Kumar",
//             email : "sumit@google.com"
//         })
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user.username)
// })

// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 username : "Sumit Kumar",
//                 email : "sumit@google.com",
//                 age : 21
//             })
//         }
//         else{
//             reject(function(){
//                 console.log("error : Something went wrong")
//             })
//         }
//     },1000)
// })

// promise4.then(function(user){
//     console.log(user.username)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(){
//     console.log("There is an error")
// }).finally(() => {
//     console.log("The promise is finally completed")
// })

// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({
//                 username : "Sumit Kumar",
//                 email : "sumit@google.com",
//                 age : 21
//             })
//         }
//         else{
//             reject("error : Something went wrong")
//         }
//     },1000)
// });

// async function consume5(){
//     try{
//         const response5 = await promise5
//         console.log(response5)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consume5()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() // response is string so convert it to json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))