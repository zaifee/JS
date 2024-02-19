//singleton simply means if we make a object with this then it act as a object
//if we declared obj with literal then object will not become singleton 
// Object.create(); //singleton

//object literals
const mySym = Symbol("key1");
const JSlike = {
    name: "Nawaz",
    "fullName" : "MohdNawaz",
     [mySym]: "myKey1",
    age: 22,
    location: "Deoband",
    email : "nawazthezaifre@gmail.com",
    isLoggedIn: false, 
    lastLoggedInDays: ["Monday", "Saturday"]
}
//access it 
console.log(JSlike.email);
console.log(JSlike["email"]);
console.log(JSlike.fullName);
console.log(JSlike.fullName);


//but with if used ctor then obj will be singleton
//but if we make from another way then the multiple instances of that object will be created 

// Q: Use symbols as a key and add this in a obj ?

console.log(JSlike[mySym]);
JSlike.email = "codewithnawaz@gmail.com";
console.log(JSlike.email);

//freezing some part of the object
Object.freeze(JSlike);
JSlike.email = "askdfsa@kdfka";
console.log(JSlike);


JSlike.greeting = function(){
    console.log("Hello Js Users");
}
console.log(JSlike.greeting());