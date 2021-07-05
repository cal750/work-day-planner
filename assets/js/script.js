var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

document.getElementById('currentDay').innerHTML = ("The date is " + today);



var userInputOne = document.querySelector(".work-one");
var userInputSavedOne = document.querySelector(".input-one");
var saveButtonOne = document.querySelector(".save-button-one");


function renderLastInput() {
    var theInputOne = localstorage.getItem("inputOne");
    userInputSavedOne.textContent  = userInputOne.textContent;
}

saveButtonOne.addEventListener("click", function(event) {
    event.preventDefault();

    var inputOne = document.querySelector(".work-one");
    localStorage.setItem("inputOne", userInputOne);
    renderLastInput;
})