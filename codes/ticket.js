const ticket_counter = document.getElementById('ticketCounter');
const seatCount = document.getElementById('seat_count');
let availableSeat = document.getElementById('available_seat');
const totalprice = document.getElementById('total-price');
const defoultText =  document.getElementById('defoult-text');
const inputContainer =  document.getElementById('input-container');
const phoneNumber = document.getElementById('phone-number');
const nextButton = document.getElementById('nextBtn');
const relode = document.getElementById('closebtn');
const form = document.getElementById('foram-section');



let selectBtn =[];
let ticketPrice = 0;

//* ticket click function

function handelClickEvent(event){

  const value = event.innerText;

  //* alert for reselect button
  

  if (selectBtn.includes(value)){
    return alert('Alrady selected')
  }
  else if( selectBtn.length < 4){
    event.classList.add('bg-lime-400');

    //* hide defoult no seat book text

    defoultText.classList.add("hidden");

    //* Count how many seat booked
  selectBtn.push(event.innerText);
 seatCount.innerText = selectBtn.length;

     //* Count how many seat available
 const availableSeatCount = parseFloat(availableSeat.innerText);
 const newAvailableSeatCount = availableSeatCount -1;
availableSeat.innerText = newAvailableSeatCount;

    //* Add seat detail as a list
  ticket_counter.innerHTML += `<li class="text-base font-normal flex justify-between">

  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>500</span>
  
  </li>`

      //* Count total seat expence
  ticketPrice += 500;
  totalprice.innerText = ticketPrice.toFixed(2);

      //* Enable cupon section
  if(selectBtn.length > 3 ) {
    couponInput.removeAttribute('disabled')
    couponBtn.removeAttribute('disabled')
    
  }


}
else{

  return alert('maximum 4 seat you can booked');
}

  } //* function end

  
//* cupon function

const cuponButton = document.getElementById('couponBtn');
const cuponInput = document.getElementById('couponInput');
let grandPrice = document.getElementById('grandprice');
let cuponSave = 0;


cuponButton.addEventListener('click', function(){
console.log(cuponInput.value);

if(cuponInput.value === 'HB20'){

  cuponSave = ticketPrice * .15;

const grandTotalPrice = ticketPrice - cuponSave;
grandPrice.innerText = grandTotalPrice;
}

else if(cuponInput.value === 'HB50'){

  cuponSave = ticketPrice * .35;
  
const grandTotalPrice = ticketPrice - cuponSave;
grandPrice.innerText = grandTotalPrice;
}

else{
  return alert('cupon not found');
}

inputContainer.innerHTML = `

<p>Discount</p>

<p>
  <span>BDT</span>
  <span id="total-price">${cuponSave}</span>
</p>

`
;

})


phoneNumber.addEventListener('input', function(e){
  const number = e.target.value;
  // console.log(number);
  if(number.length >= 11){
    nextButton.removeAttribute('disabled')
  }
})

relode.addEventListener('click', function(){
  window.location.reload();
})