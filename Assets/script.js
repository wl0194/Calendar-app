$(document).ready(function() {

    $(".saveBtn ").click(function(event) {
        var $button = $(event.target);
        console.log($button);

    });

    function timeTracker() {

        var timeNow = moment().hour();


        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockTime);
            console.log(timeNow);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    };

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hou10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();


    $('#currentDay').text(moment().format('dddd, MMM, Do, YYYY'));

});