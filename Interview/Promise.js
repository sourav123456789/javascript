const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('completed the set timeout function')
        resolve()
    }, 1000)
})

promise.then(() => {
    console.log('completed the promise')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('completed the set timeout function')
        resolve({"user": "John", "age": 25, "country": "USA"})
    }, 5000)
})

promise2.then((data) => {
    console.log(data)
})
    .catch((err) => {
        console.log(err)
    }).finally(() => {
    console.log('completed the promise')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('completed the set timeout function')
        reject("error occured")
    }, 5000)
})

async function consumePromise3() {
    try {
        const response = await promise3;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
