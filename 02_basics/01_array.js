const array = [1,2,3,4,5];
console.log(array[2]);
const myHeros = ["shaktiman", "helloji"];

const myArray2 = new Array(1,2,3, 4);

//Array Methods 
// myHeros.push("Nawaz");
// console.log(myHeros); //Printing whole array 
// myHeros.pop();
// console.log(myHeros);


//unshift method add the value in starting of array 
array.unshift(9);
console.log(array);
array.shift();
console.log(array);

console.log(array.includes(9)); //it gives boolean value 
console.log(array.indexOf(3)); //it gives index no

const newArry = array.join();
// console.log(`Printing the original ${array} array.`);
console.log(array); //aray format me 
console.log(newArry); //comma separated hai
// console.log(`Printing the array after joining ${newArry} joining array.`);
console.log(typeof newArry);

//slice, splice interview important question 
console.log(`A ${array}`);
const myArray1 = array.slice(0,3);
console.log(array);
console.log(myArray1);
console.log(`Your original array is ${array}`);


const myArray21 = array.splice(1, 3);
console.log(myArray21);
console.log(`Original Array is: ${array}`);