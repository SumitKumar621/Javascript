// ----IMMEDIATELY INVOKED FUNCTION EXPRESSIONS-----

(function chai(){
    console.log("DB connected")
})();

( () => {
    console.log("DB connected two")
})();

( (name) => {
    console.log(`Hey, this is ${name}`)
})("Mona")