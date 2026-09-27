const heros = ["thor","Ironman","spiderman"]

const dc = ["superman","flash","batman"]

//heros.push(dc)

//console.log(heros)

// const allhero = heros.concat(dc)
// console.log(allhero)

// const all = [...heros,...dc]
// console.log(all)

const arr = [1,2,[3,4,5],[6,7,8]]

const real = arr.flat(Infinity) // make a single array
console.log(real)

console.log(Array.isArray("Sumit"))
console.log(Array.from("Sumit")) // CONVERT INTO ARRAY

let a = 1
let b = 2
let c = 3

console.log(Array.of(a,b,c))