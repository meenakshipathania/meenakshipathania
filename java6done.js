window.onload = function(){
    let godesti = localStorage.getItem('destination')
    document.getElementById('desti').innerText = godesti;

    let showdata = localStorage.getItem('day')
    let showmonth = localStorage.getItem('MonthName')
    let fulldate =showdata + " " + showmonth;
    document.getElementById('test').innerText = fulldate;
    
    let fulldays = localStorage.getItem('days')
    document.getElementById('duration').innerText = fulldays;
  
    let withyou = localStorage.getItem('with')
    document.getElementById('withyou').innerText = withyou

    let doingdo = localStorage.getItem('todoing')
    document.getElementById('fordo').innerText = doingdo
  
  }

  function pageRedirect() {
    window.location.href="https://psd2htmlx.com/R/multistep/index.html";
  } 