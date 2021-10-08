$(document).ready(function() {

    $(".saveBtn ").click(function(event) {
        var $button = $(event.target);
    });
    //pull in id of hours and send it to local storage
    //
    //get the current number of hours (function) .each
    //loop over it
    //parseInt
    //check if we moved past this time

    //(function) then pull everything from local storage
    $('#currentDay').text(moment().format('dddd, MMM, Do, YYYY'));

});