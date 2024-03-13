const marvael_heros = ["spiderman", "batman", "helloji"];
const indian_heros = ["shaktiman", "batman"];

// marvael_heros.push(indian_heros);
// console.log(marvael_heros);
// console.log(marvael_heros[2][2]);

const mergeArray = marvael_heros.concat(indian_heros);
// console.log(mergeArray);

//Spread Operator
const myAllHeros = [...marvael_heros, ...indian_heros];
console.log(myAllHeros);

//Solve the depth of the array 
const anoArray = [1,2,3,[4,5,6, [7]]];
//flat takes depth of the array how much it has to solve
const real_another_array = anoArray.flat(Infinity);



//if we want the data in array format then we can do this 
console.log(Array.isArray("Nawaz")); //it returns boolean value
console.log(Array.from("Nawaz")); //it makes the array now

console.log(Array.from({name : "faraz"})); //interesting case
//line 26 returns the empty array 

let score1 = 100;
let score2 = 200;
let score3 = 300;
//convert into array 
console.log(Array.of(score1, score2, score3));


