window.onload = function() {
    let godesti = localStorage.getItem('destination')
    document.getElementById('desti').innerText = godesti;
    
    let currentSelectedMonth =  localStorage.getItem('MonthName');
    var month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
    let currentMonthNum ;
    for(let i=0; i < month.length;i++) {
        let indexx = month[i].toLowerCase().indexOf(currentSelectedMonth.toLowerCase());
        if (indexx >= 0) {        
            currentMonthNum  = i;
        }
    }
    localStorage.setItem('monthNum', currentMonthNum);
    var currentMonth = document.querySelector(".current-month");
    var calendarDays = document.querySelector(".calendar-days");
    var today = new Date();
    var date = new Date(new Date(new Date().setMonth(currentMonthNum)).setDate(1));
    currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
    renderCalendar();
    function renderCalendar(){    
        const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
        const totalMonthDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
        const startWeekDay = new Date(date.getFullYear(),date.getMonth(),0).getDay();
        calendarDays.innerHTML = "";
        let totalCalendarDay = 6 * 7;
        for (let i = 0; i < totalCalendarDay; i++) {
            let day = i-startWeekDay;
            if(i <= startWeekDay){
                // adding previous month days
                calendarDays.innerHTML += `<div class='padding-day'>${prevLastDay-i}</div>`;
            }else if(i <= startWeekDay+totalMonthDay){
                // adding this month days
                date.setDate(day);
                date.setHours(0,0,0,0);           
                let dayClass = date.getTime()===today.getTime() ? 'current-day' : 'month-day';
                calendarDays.innerHTML += `<div class='${dayClass}'>${day}</div>`;
            }else{
                // adding next month days
                calendarDays.innerHTML += `<div class='padding-day'>${day-totalMonthDay}</div>`;
            }    }}
    document.querySelectorAll(".soft-btn").forEach(function (element) {
        element.addEventListener("click", function () {
            date = new Date(currentMonth.textContent);
            date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
            currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
            renderCalendar();
        });});
    document.querySelectorAll(".btn").forEach(function (element) {
        element.addEventListener("click", function () {
            let btnClass = element.classList;
            date = new Date(currentMonth.textContent);
            if(btnClass.contains("today"))
                date = new Date();
            else if(btnClass.contains("prev-year"))
                date = new Date(date.getFullYear()-1, 0, 1);
            else
                date = new Date(date.getFullYear()+1, 0, 1);
            currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
            renderCalendar();
        });
    });

    

}

function pageRedirect(event) {
    localStorage.setItem('day', event['target'].innerHTML);
    window.location.href="https://psd2htmlx.com/R/multistep/duration.html";
  } 

