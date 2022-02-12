
document.querySelector('#selectCity').addEventListener("click", () => {
  document.querySelector('.city_dropdown').classList.remove("hide");
});

document.querySelector('#outside').addEventListener("click", () => {
  document.querySelector('.city_dropdown').classList.add("hide");
});

document.querySelector('#already').addEventListener("click", () => {
  document.querySelector('.city_dropdown').classList.add("hide");
});



function setCity(value) {
  document.querySelector('#country').classList.add("hide");
  localStorage.setItem('selectedCityByUser', value.target.innerText);
  let cityvalue = localStorage.getItem('selectedCityByUser')
  let comma = cityvalue.indexOf(',')
  localStorage.setItem('selectedCityByUser', value.target.innerText.substring(4,comma));
  let depa = localStorage.getItem('selectedCityByUser')
  document.getElementById('selectCity').innerText = depa


  localStorage.setItem('heading1','When is your departure from') 
  let head1 = localStorage.getItem('heading1')
  document.getElementById('firstText').innerText = head1

  localStorage.setItem('heading2','Planned?') 
  let head2 = localStorage.getItem('heading2')
  document.getElementById('secondText').innerText = head2
  console.log(document.querySelector('#selectCity'))

  document.querySelector('.city_dropdown').classList.add("hide");
  document.querySelector('#selectCity').value = value.target.innerText.substring(3);
}
let allCities = document.querySelectorAll('.city_item');
document.querySelector('.city_input').addEventListener("input", (event) => {

  if (event.target.value.length > 3) {
      allCities.forEach((city) => {
          let idExist = city.textContent.toLowerCase().indexOf(event.target.value.toLowerCase());
          if (idExist < 0) {
              city.classList.add("hide");
          }
          else {

          }
      })
  }
  else {
      allCities.forEach((city) => {        
          city.classList.remove("hide");
      })
  }
})


  


window.onload = function() {
    let godesti = localStorage.getItem('destination')
    document.getElementById('desti').innerText = godesti;
    document.getElementById('country').innerText = godesti
    
    var month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
    var today = new Date();
    var cd = new Date(today.setDate(today.getDate() + 1));
    var mm = month[cd.getMonth()];
    localStorage.setItem('mmvalue', today.getMonth());
    localStorage.setItem('cdvalue', cd.getDate());
    localStorage.setItem('names', JSON.stringify(month));

    
    
  }

  var loopNumber = +localStorage.getItem('mmvalue')
  var loopval = +localStorage.getItem('cdvalue')
  var storedMonths = JSON.parse(localStorage.getItem('names'));
  

  
for(let i=loopNumber; i<=9; i++){
  let date = new Date(loopval);
  var newDate = new Date(date.setMonth(date.getMonth() + i)).getMonth();
  let res = '.monthName' + i
  document.querySelector(res).innerText = storedMonths[newDate].slice(0, 3);

}
function pageRedirect(event) {
 let MonthName =  document.querySelector(`.${event}`).innerText; 
 localStorage.setItem('MonthName', MonthName);
  window.location.href="https://psd2htmlx.com/R/multistep/when.html";
} 


