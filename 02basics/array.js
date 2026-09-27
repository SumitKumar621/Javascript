const arr = [0,1,2,3,4,5]
const myhero = ["shaktiman","vijay","yash"]

const arr2 = new Array(1,2,3,4)

console.log(arr2[1])

//----Methods--------
// arr2.push(5)
// console.log(arr2)
// arr2.pop()
// console.log(arr2)

// arr2.unshift(6)
// console.log(arr2)
// arr2.shift()
// console.log(arr2)

// console.log(arr2.includes(4))
// console.log(arr2.indexOf(9))
// console.log(arr2.indexOf(4))

const arr3 = arr2.join(); // convert the array into the string 

// console.log(arr2)
// console.log(typeof(arr2))
// console.log(arr3)
// console.log(typeof(arr3))

// SLICE AND SPLICE
console.log("A ",arr2)
const mynew = arr2.slice(1,4) // NOT CHANGES THE ARRAY 
console.log(arr2)
console.log("B ",mynew)

const mynew2 = arr2.splice(1,3) // CHANGES THE ARRAY 
console.log(arr2)
console.log("C ",mynew2)
