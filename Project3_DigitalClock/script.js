const clock = document.getElementById('clock');

//setInterval is a time of function which display thing after everymili seconds 

setInterval(function(){

  let date = new Date();
  // console.log(date.toLocaleTimeString()); 
  clock.innerHTML = date.toLocaleTimeString();
  
},1000);
