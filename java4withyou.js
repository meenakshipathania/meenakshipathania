window.onload = function () {
    let godesti = localStorage.getItem('destination')
    document.getElementById('desti').innerText = godesti;

    let showdata = localStorage.getItem('day')
    let showmonth = localStorage.getItem('MonthName')
    let fulldate = showdata + " " + showmonth;
    document.getElementById('test').innerText = fulldate;

    let fulldays = localStorage.getItem('days')
    document.getElementById('duration').innerText = fulldays;


}


var k;
function decrease_adult() {
    k = document.querySelector('#incre_ad').value;
    if (k > 1) {
        document.getElementById('incre_ad').value = --k;
    }
}
function increase_adult() {
    k = document.querySelector('#incre_ad').value;
    document.getElementById('incre_ad').value = ++k;
}

var j;
function decrease_child() {
    j = document.querySelector('#incre').value
    if (j > 0) {
        document.getElementById('incre').value = --j;
    }
}

function increase_child() {
    j = document.querySelector('#incre').value;
    document.getElementById('incre').value = ++j;
}


var r;
function deleteRoom() {
    r = document.querySelector('#rrom').value;
    if (r > 1) {
        document.getElementById('rrom').value = --r;
    }
}
function addRoom() {
    r = document.querySelector('#rrom').value;
    document.getElementById('rrom').value = ++r;
}






var a;
function friendAdultDec() {
    a = document.querySelector('#friendAdd').value;
    if (a > 1) {
        document.getElementById('friendAdd').value = --a;
    }
}
function friendAdultInc() {
    a = document.querySelector('#friendAdd').value;
    document.getElementById('friendAdd').value = ++a;
}


var b;
function friendChidDec() {
    b = document.querySelector('#friendchild').value
    if (b > 0) {
        document.getElementById('friendchild').value = --b;
    }
}

function friendChildInc() {
    b = document.querySelector('#friendchild').value;
    document.getElementById('friendchild').value = ++b;
}


var t;
function removeRoom() {
    t = document.querySelector('#friendRoom1').value;
    if (t > 1) {
        document.getElementById('friendRoom1').value = --t;
    }
}
function extendRoom() {
    t = document.querySelector('#friendRoom1').value;
    document.getElementById('friendRoom1').value = ++t;
}



function family() {
    let adultCount = document.querySelector('#incre_ad').value;
    let childCount = document.querySelector('#incre').value;
    localStorage.setItem('with', 'Family');
    window.location.href = "https://psd2htmlx.com/R/multistep/todo.html";
}
function friend() {
    let adultCount = document.querySelector('#incre_ad').value;
    let childCount = document.querySelector('#incre').value;
    localStorage.setItem('with', 'Friends');
    window.location.href = "https://psd2htmlx.com/R/multistep/todo.html";
}
function pageRedirect(event) {
    localStorage.setItem('with', event)
    window.location.href = "https://psd2htmlx.com/R/multistep/todo.html";
}
