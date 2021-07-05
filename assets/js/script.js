var today = moment().format('Do MMMM YYYY, h:mm a'); {}
console.log(today);

document.getElementById('currentDay').innerHTML = ("The date is " + today);

function beforeNow() {
    if (moment().format('Do MMMM YYYY, h:mm a') >= moment().format('Do MMMM YYYY, 2:00 a'))
    document.querySelector(".time-block").style.color = "blue";
};

const hour = moment().format("HH");
var green = "rgb(248, 0, 0)";
var white = "#efefef";
var red = "rgb(103, 245, 84)";

var colorSix = document.getElementById("")
var colorSeven = document.getElementById("")
var colorEight = document.getElementById("")
var colorNine = document.getElementById("")
var colorTen = document.getElementById("")
var colorEleven = document.getElementById("")
var colorTwelve = document.getElementById("")
var colorThirteen = document.getElementById("")
var colorFourteen = document.getElementById("")
var colorFifteen = document.getElementById("")
var colorSixteen = document.getElementById("")
var colorSeventeen = document.getElementById("")

function setBackgroundSix() {
    if hour > 6;
    inpup.classList.add("")
}




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
});

