var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('DD-MM-YYYY');