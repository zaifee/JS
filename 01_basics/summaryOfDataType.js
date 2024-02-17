//Data type categorized majorly into two types 
// primitves and non-primitives basically it tells how we store in the memory and how we access it from the memory 

// 1. Primitive : String, Number, Boolean, null (means empty not 0 remembered sir tell about temperature), undefined, Symbol
// (Using symbol we make characters unique), bigInt 

//Javascript is dynamically typed language 

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = true; 
const outsidetemp = null; //null means here is empty 
console.log(typeof outsidetemp); //object
console.log(typeof number) //number hi aata hai 
console.log("Using Symbol");
const id = Symbol('123');
const anotherid = Symbol('123'); //here line 17 and 18 both are diff 
console.log(id === anotherid);

const bigNumber = 23456666666663n; //it beomes bigInt 



// 2. Non-primitive(Reference type) 
// Arrays, object, functions 

const heros = ["spiderman", "batman", "doga"];
console.log(typeof heros); //object
let myObj = {
    name: "nawaz",
    age: 22,
}
console.log("Priting typeof obj: " + myObj);

// const myFunction = funtion(){
//   console.log("hello world");
// }

//typeof reference datatype comes out to be function obj
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */