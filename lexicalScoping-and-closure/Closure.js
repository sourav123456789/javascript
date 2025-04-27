function outer(name) {
    function inner() {
        console.log("Hello ", name)
    }
    return inner
}

const inner = outer("sourav")
inner()
// console.log("outer " ,name)
