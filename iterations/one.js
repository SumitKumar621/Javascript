// const coding = ["c++","Python","Js","Php"]

// const nums = [1,2,3,4,5,6,7,8,9]

// const newnum = nums.filter( (num) => num > 4)

// // console.log(newnum);

// const arr = [];

// nums.forEach ( (val) => {
//     if(val > 4){
//         arr.push(val)
//     }
// })

// console.log(arr)

const nums = [1,2,3,4,5,6,7]

// const arr = nums.map( (num) => num + 10) // MAP RETURNS 

const arr = nums.map( (num) => num * 10).map( (num) => num + 2).filter( (num) => num > 30) // second map excutes on the output of first 

console.log(arr)

