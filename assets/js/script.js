var today = moment().format('Do MMMM YYYY, h:mm a'); {}
console.log(today);

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