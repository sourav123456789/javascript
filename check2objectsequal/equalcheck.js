function equalCheck(obj1, obj2) {

    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 == "string" || typeof obj2 == "string") {
        if (obj1.toString().toLowerCase() !== obj2.toString().toLowerCase()) {
            return true;
        }
    }


    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        if (!equalCheck(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

const obj1 = {
    name: "sourav",
    age: 20,
    address: {
        city: "bangalore",
        state: "Karnataka",
        country: "India"
    }
}
const obj2 = {
    name: "sourav",
    age: 20,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    }
}

console.log(equalCheck(obj1, obj2));