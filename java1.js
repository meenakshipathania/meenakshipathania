
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


