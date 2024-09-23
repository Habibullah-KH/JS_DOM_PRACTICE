const inputPass = document.getElementById('inputpassword');
const inputName = document.getElementById('inputname');
const button = document.getElementById('loginBtn');

inputName.addEventListener('input', function(e){

  const value =  e.target.value ;
  if(value.length > 4){
    return inputPass.removeAttribute('disabled');
  }

})


inputPass.addEventListener('input', function(event){

  const number =  event.target.value ;
  if(number.length > 4){
    button.removeAttribute('disabled');
  }

})

button.addEventListener('click', function(){
  Window.location.href = 'ticket.html'

})


