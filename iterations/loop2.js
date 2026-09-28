const coding = ["c++","Python","Js","Php"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

const mycoding = [
    {
        languagename : "C++",
        languagefile : "cpp" 
    },
    {
        languagename : "Java",
        languagefile : "js" 
    },
    {
        languagename : "Pyhton",
        languagefile : "py" 
    }
]

mycoding.forEach( (item) => {
     console.log(item.languagename)
})