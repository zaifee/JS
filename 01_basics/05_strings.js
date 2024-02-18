const name = "MohdNawaz";
const repoCount = 10;
// old method to concatenate
// console.log(name + repoCount + "value");

// string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// The usage of this syntax is we can apply some methods on the go 

//declaration 
const gameName = new String("nawazish");
// console.log(gameName[0]);
// console.log(gameName.__prototype__);
// string methods 
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));//we pass no. here 

console.log(gameName.indexOf('a')); 
//it gives the index no. 

//some more methods of js 
const newString = gameName.substring(0, 4);
console.log(newString);

//In slice methods we can give negative values
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "Nawaz";
console.log(newStringOne);
console.log(newStringOne.trim);

const url = "https:nawaz.com/nawaz%20qureshi";
console.log(url.replace('%20', "hiji"));

console.log(url.includes('nawaz'));
console.log(gameName.split('-'));