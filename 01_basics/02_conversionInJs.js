let score = "33abc";

console.log(typeof (score));

let valueInNumber = Number(score); //conversion of number to string 
console.log(typeof valueInNumber);
console.log(valueInNumber); //it will give NAN as output 

let number = 123
let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);

/*
Notes : 
"33" => 3 
"33abc" => it gives NAN not a number 
true => 1 or false = 0 


"" it gives false 
"Nawaz" => it gives typeof true as output 


*/