// let a = "sourav"
// console.log(typeof a)
//
// let b = "33";
// console.log(typeof a)
// let aInNumber = Number(a);
// console.log(typeof aInNumber)
//
//
// const obj1 = {1 : "a" , 2 : "b"}
// const obj2 = {2 : "x" , 4 : "b"}
// const obj3 = {2 : "z" , 6 : "b"}
//
// const obj4 = Object.assign({} , obj1, obj2 , obj3);
// console.log(obj4)
//
//
// const marvel_heros = ["deadpool" , "avenger"]
// const super_heros = ["gangadhar" , "ironman"]
//
// const all_heros = marvel_heros.concat(super_heros);
// console.log(all_heros)

function clone(obj) {
    // Handle null or primitive values
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle objects
    const copy = {};
    for (let key in obj) {
        copy[key] = clone(obj[key]); // Recursively clone each propert
    }
    return copy;
}

const obj = {
    name: "sourav",
    age: 20,
    address: {
        city: "bangalore",
        state: "Karnataka",
        country: "India"
    },
    parents: {
        father: "Krushna",
        mother: "Sanju"
    }
};

const cloned = clone(obj);

console.log("clone is ", cloned)

// Modify clone
cloned.address.city = "Delhi";

// Compare
console.log("Original:", obj.address.city); // Should be "bangalore"
console.log("Cloned:  ", cloned.address.city); // Should be "Delhi"

const user = {
    name: "sourav",
    age: 20,
    addressLine1: {
        city: "bangalore",
        state: "Karnataka",
        country: "India"
    }
}

const {name , age , addressLine1: address} = user

console.table([name , address])

function calculate(val1 , val2 , ...nums) {
    return nums;
}

console.log(calculate(200 , 400 , 800 , 2000))


