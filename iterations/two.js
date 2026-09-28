const nums = [1,2,3,4]

const total = nums.reduce( (acc,curr) => {
    console.log(`acc value: ${acc}`)
    return acc + curr
}, 0) // 0 IS THE INITIAL VALUE OF ACCUMULATOR

// console.log(total)

const shoppingcart = [
    {
        itemname: "JS",
        price: 299
    },
    {
        itemname: "PY",
        price: 899
    },
    {
        itemname: "AI",
        price: 1999
    }
]

const totalp = shoppingcart.reduce( (acc,item) => acc + item.price,0)

console.log(totalp)