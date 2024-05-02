

$(function() {
    var dir = -1;
    var interval = 3000;
    var duration = 700;
    var timer;
    $("#slide ul").prepend($("#slide li:last-child"));
    $("#slide ul").css("left", -1000);

    timer = setInterval(slidetimer, interval);

    function slidetimer() {
        if (dir == -1) {
            $("#slide ul").animate({ "left": "-=1000px" }, duration,
              function() {
                $(this).append($("#slide li:first-child" ));
                $(this).css("left",-1000);
        });
        }
        else {
            $("#slide ul").animate({ "left": "+=1000" }, duration,
        function() {
            $(this).prepend($("#slide li:last-child" ));
            $(this).css("left", -1000);
            dir = -1;
            });
        }
        }
    
});