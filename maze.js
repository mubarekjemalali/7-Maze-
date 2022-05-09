$(document).ready(function () {
    $("#start").click(function () {

        //remove youlose and youwin class to reverse to the boundar's color to normal
        //set touch to false

        $(".boundary").removeClass("youlose");
        $(".boundary").removeClass("youwin");
        $("#status").text("Game started");


        let touch = false;
        //lost

        $(".boundary").mouseover(function () {
            touch = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost, better luck next time :(");

        });

        // won
        $("#end").mouseover(function () {

            if (!touch) {
                $(".boundary").addClass("youwin");
                $("#status").text("You won :)");

            }

        });
    });

});