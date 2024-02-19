const marvelHeros = ['thor', 'IronMan', 'spiderman'];
const bollywoodHeros = ['superman', 'batman', 'jaduman'];

// marvelHeros.push(bollywoodHeros);
// console.log(marvelHeros); //array inside another array 

// console.log(marvelHeros[3][1]); 

//Instead Push we can used the concate method 
const newArray = marvelHeros.concat(bollywoodHeros);
console.log(newArray);

//Instead of concate we can used spreadout 
//remember spread of operator like a glass of water fall on the ground
const all_newArray = [...marvelHeros, ...bollywoodHeros];
console.log(all_newArray);

const arrayInsideAnotherArray = [1,2,3,4,5,[6,5,4,[8,7,5], 6]];

const finalAns = arrayInsideAnotherArray.flat(Infinity);

// console.log(finalAns);

//Asking whether it is a array 
console.log(Array.isArray("Nawaz"));
//convert into the array 
console.log(Array.from("Nawaz"));
// console.log(Array.from({name:Nawaz})); //intersting case 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2, score3));
