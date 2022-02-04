function setDuration(event) {
    localStorage.setItem('days', event['target'].innerText)
    window.location.href="https://psd2htmlx.com/R/multistep/withyou.html";
}

window.onload = function(){
    let showdata = localStorage.getItem('day')
    let showmonth = localStorage.getItem('MonthName')
    let fulldate =showdata + " " + showmonth;
    document.getElementById('test').innerText = fulldate;

    let godesti = localStorage.getItem('destination')
    document.getElementById('desti').innerText = godesti;
}
