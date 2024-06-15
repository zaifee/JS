const form = document.querySelector('form');


form.addEventListener('submit', function(e){
  e.preventDefault(); //ye bhul gya tha

const height = parseInt(document.querySelector('#height').value);

const weight = parseInt(document.querySelector('#weight'). value);

const res = document.querySelector('#results');

//applying checks 
//isNan checking this is a number or not
if(height == ' ' || height < 0 || isNaN(height)){
  res.innerHTML = `<span>Invalid height ${height} </span>`
}
else if(weight == ' ' || weight < 0 || isNaN(weight)){
  res.innerHTML =  `<span>Ivalid weight ${weight}`;
}else{

const bmi = (weight / ((height * height)/10000)).toFixed(2);

  let bmiCategory = ' ';
  if(bmi < 18.6){
    bmiCategory = 'UnderWeight';
  }else if(bmi >= 18.6 || bmi <= 24.9){
    bmiCategory = 'NormalWeight';
  }else{
    bmiCategory = 'OverWeight';
  }
  


 res.innerHTML = `<span> Your BMI is ${bmi} and your bMI category is ${bmiCategory}`;
}




});
