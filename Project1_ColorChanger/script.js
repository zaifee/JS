const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);

  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    //e.target tells which we have selected which variable

    switch(e.target.id){
      case 'grey':
          body.style.backgroundColor = e.target.id;
      case 'white':
          body.style.backgroundColor = e.target.id;
      case 'blue':
          body.style.backgroundColor = e.target.id;
      case 'yellow':
          body.style.backgroundColor = e.target.id;
    }

    
    });

});




