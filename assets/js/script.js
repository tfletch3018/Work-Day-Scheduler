//moment commands and variables
var currentDay = moment().format('dddd') + " " + moment().format("D MMMM YYYY");
var currentTime = moment().format('hh:mm:ss a');
//time variables
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
var hour = moment().hours();
var totals;
var hourSpan;

//targets each item intended for local storage
function initPage() {

    console.log("Current Hour " + hour);
    var startnine = JSON.parse(localStorage.getItem("09:00 am"));
    hourNine.val(startnine);

    var startten = JSON.parse(localStorage.getItem("10:00 am"));
    hourTen.val(startten);

    var starteleven = JSON.parse(localStorage.getItem("11:00 am"));
    hourEleven.val(starteleven);

    var starttwelve = JSON.parse(localStorage.getItem("12:00 pm"));
    hourTwelve.val(starttwelve);

    var startthirteen = JSON.parse(localStorage.getItem("01:00 pm"));
    hourThirteen.val(startthirteen);

    var startfourteen = JSON.parse(localStorage.getItem("02:00 pm"));
    hourFourteen.val(startfourteen);

    var startfifteen = JSON.parse(localStorage.getItem("03:00 pm"));
    hourFifteen.val(startfifteen);

    var startsixteen = JSON.parse(localStorage.getItem("04:00 pm"));
    hourSixteen.val(startsixteen);

    var startseventeen = JSON.parse(localStorage.getItem("05:00 pm"));
    hourSeventeen.val(startseventeen);

    var starteightteen = JSON.parse(localStorage.getItem("06:00 pm"));
    hourEighteen.val(starteightteen);

    var startnineteen = JSON.parse(localStorage.getItem("07:00 pm"));
    hourNineteen.val(startnineteen);
}

//Function to display running clock
var interval = setInterval(function () {
    var timeNow = moment();
    $('#currentDay').html(timeNow.format('YYYY MMMM DD') + ' '
        + timeNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDay + " " + timeNow.format('hh:mm:ss A'));
}, 100);


function style() {
    $(".form-control").each(function () {
        var checkTime = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(checkTime);
        console.log(hour);

        if (hour > checkTime) {
            $(this).addClass("past");
        } else if (hour < checkTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function () {
    initPage()
    style()

    $(".saveBtn").on("click", function () {
        totals = $(this).siblings(".form-control").val().trim();
        console.log(totals);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(totals));
    })
})
