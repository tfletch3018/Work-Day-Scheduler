var currentDay = moment().format('dddd') + " " + moment().format("D MMMM YYYY");
var currentTime = moment().format('hh:mm:ss a');
var hourNine = $("#9am");
var hourTen = $("#10am");
var hourEleven = $("#11am");
var hourTwelve = $("#12pm");
var hourThirteen = $("#13pm");
var hourFourteen = $("#14pm");
var hourFifteen = $("#15pm");
var hourSixteen = $("#16pm");
var hourSeventeen = $("#17pm");
var hourEighteen = $("#18pm");
var hourNineteen = $("#19pm");

var hour = moment().hour();
var userInside;
var hourSpan;

var interval = setInterval(function() {
    var timeNow = moment();
    $('#currentDay').html(timeNow.format('YYYY MMMM DD') + ' '
    + timeNow.format('dddd')
    .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDay + " " + timeNow.format('hh:mm:ss A'));
}, 100);

function initPage() {
    console.log("Current Time " + hour);
    var startnine = JSON.parse(localStorage.getItem("09:00 am"));
    hourNine.val(startnine);



}