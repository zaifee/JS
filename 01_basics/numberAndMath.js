const score = 400;
// console.log(score);

//now we made dedicately number 
const balance = new Number(100); //it's a number now
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //precision value 

const anotherNum = 123.89666;
// console.log(anotherNum.toPrecision(3));
// be careful with Precsion Method 

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++Maths++++++++++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(1,2,0,4));
// console.log(Math.max(9,4,5,6));


// important 
// console.log(Math.random()); //it's will value come in between 0 and 1 
console.log((Math.random()*10) + 1);
//Note we are * 10 and adding 1 because we want value lie between 1 and 9. zero will not come
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 15; 

//formula 
console.log(Math.floor(Math.random() * (max-min+1)) + min);
