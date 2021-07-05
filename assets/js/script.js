var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

document.getElementById('currentDay').innerHTML = ("The date is " + today);

var saveButton = document.querySelector(".save-button");
var workOne = document.querySelector(".work-one");

var textOne = window.localStorage.getItem("textOne");

saveButton.addEventListener("click", function() {
    workOne.textContent = textOne;
    window.localStorage.setItem("textOne", textOne);
})

