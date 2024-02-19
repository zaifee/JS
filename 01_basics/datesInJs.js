let myDates = new Date();
//date is a object
// console.log(myDates.toString());

// console.log(myDates.toDateString());
// // Sun Feb 18 2024 

// console.log(myDates.toISOString()); //2024-02-18T18:13:20.773Z

console.log(myDates.toJSON());
// // 2024-02-18T18:15:13.024Z

console.log(myDates.toLocaleString());
// console.log(typeof myDates); //object 
// //declaration
let myCreatedDate = new Date(2024, 1, 18); 
// // let myCreatedDate = new Date(2024, 1, 18.2, 3); 
// // let myCreatedDate = new Date("2024-01-18"); 
// //Month starts from 1 
// let myCreatedDate = new Date("18-02-2024");

console.log("Printing the Local String");
console.log(myCreatedDate.toLocaleString());


// //timestamp is used to check time second 
// let myTimeStamp = Date.now("2023-01-15");
// // console.log(myTimeStamp);

// //if we want exact date from date 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //exact time

// let newDate = new Date();
// console.log(newDate.getMonth());

// //we can play with the toLocalString Method 
// newDate.toLocaleString('default', {
//     weekday: "long"
// })
