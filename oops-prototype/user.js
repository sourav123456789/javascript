// const user = {
//     name : "sourav",
//     age : 29,
//     signedIn : true,
//
//     getUserDetails : function() {
//         console.log(this);
//     }
// }

function User(name , age , signedIn) {
    this.name = name;
    this.age = age;
    this.signedIn = signedIn;
}

User.prototype.increaseAge = function() {
    this.age += 1;
}

User.prototype.printAge = function() {
   return this.age;
}

const user1 = new User("sourav" , 29 , true);
const user2 = new User("sourav123" , 32 , false);

console.log(user1 , user2);

user1.increaseAge();
console.log(user1.printAge());

let string = "sourav            ";
String.prototype.trueLength = function() {
    let len = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i] !== " ") {
            len += 1;
        }
    }
    return len;
}

console.log(string.trueLength());

function setName(name) {
    this.name = name;
}

function createUser(name , age , signedIn) {
    setName.call(this , name);
    this.age = age;
    this.signedIn = signedIn;
}

const user3 = new createUser("sourav" , 29 , true);
console.log(user3);