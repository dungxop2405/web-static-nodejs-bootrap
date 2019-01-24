$(document).ready(function(){
    $('#ChangeInfor').click(function() {
        // load data

        // show modal
        $('#myModalConnect').modal('show');
    });

    $("#SaveChanges").click(function() {
        var eventsholded = [];
        var event = new Object();
        event.inputserver = $('#inputserver').val(); 
        event.inputuser = $('#inputuser').val();
        event.inputpassword = $('#inputpassword').val();
        event.inputport = $('#inputport').val();   
        eventsholded.push(event);
        $.ajax({
            type: "GET",
            dataType : 'json',
            async: false,
            url: 'setting.json',
            data: { data: JSON.stringify(eventsholded) },
            success: function () {alert("Thanks!"); },
            failure: function() {alert("Error!");}
        });
    });
});