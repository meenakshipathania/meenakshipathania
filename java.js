$(document).ready(function () {

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
});




document.querySelector('#selectCity').addEventListener("click", () => {
    document.querySelector('.city_dropdown').classList.remove("hide");
});



function setCity(value) {
    localStorage.setItem('selectedCityByUser', value.target.innerText);
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

document.querySelector('#stay_city').addEventListener("click", () => {
    document.querySelector('.stay_dropdown').classList.remove("hide");
});
function setNights(value) {
    localStorage.setItem('selectedNightByUser', value.target.innerText);
    document.querySelector('.stay_dropdown').classList.add("hide");
    document.querySelector('#stay_city').value = value.target.innerText;
    
}


document.querySelector('#travell_detail').addEventListener("click", () => {
    document.querySelector('.room_detail').classList.remove("hide");
});
function setTrevell(value) {
    localStorage.setItem('selectedTrevellByUser', value.target.innerText);
    document.querySelector('.room_detail').classList.add("hide");
    document.querySelector('#travell_detail').value = value.target.innerText;
}



document.querySelector('#familyList').addEventListener("click", () => {
    document.querySelector('.Family_friends').classList.remove("hide");
});


document.querySelector('#friendList').addEventListener("click", () => {
    document.querySelector('.Family_friends').classList.remove("hide");
});



    var i = 4;
    function decreaseNight() {
        if(i>4){
            --i
            document.getElementById('nights_incre').value = i + " nights";
            document.getElementById('stay_city').value = i + " nights";
            localStorage.setItem('selectedNightByUser', value.target.innerText);
            document.querySelector('.stay_dropdown').classList.add("hide");
            document.querySelector('#nights_incre').value = value.target.innerText;;
        }      
}

function increaseNight() {
    ++i
    document.getElementById('nights_incre').value = i + " nights";
    document.getElementById('stay_city').value = i + " nights";
}

var k = 0;

function decrease_adult(){
    if(k>1){
        document.getElementById('incre_ad').value = --k;
    }  
}
function increase_adult() {
    document.getElementById('incre_ad').value = ++k;
}



var j = 0;
function decrease_child(value){
    if(j>0){
        document.getElementById('incre').value = --j;
    }  
}


function increase_child() {
    document.getElementById('incre').value = ++j;
}






