var a = 20;
let b = 30;
const c = 40;

if(true) {
    a = 10
    b = 20
    const c = 30
    console.table([a , b , c]);
}

console.table([a , b , c]);

const request = new Request("http://localhost:3000/api/users" , {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({})
})

fetch(request)
.then(response => {
    if(response.ok) {
        console.log("response is ok")
    }
    else {
        console.log("response status is" , response.status)
    }
    return response.json()})
.then(data => console.log(data))
.catch(error => {
    console.log("error occured!")
})
.finally(() => console.log("finally completed!"))