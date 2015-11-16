$(document).ready(function(){

    /* GALLERIES */

	// onClick preview image
    $("#preview img").click(function(){
        $("#caption").html("");
        $("#subcaption").html("");
        $("#view-image img").attr("src",$(this).attr("src"));
        $("#view-image img").height("auto");
        $("#view-image img").width("auto");
        $("#caption").html($(this).attr("subject"));
        if ($(this).parent("div").hasClass("kenzie")) {
            $("#subcaption").html($(this).attr("medium"));
            $.ajax({
               url : "/themes/" + $(this).attr("code"),
               dataType: "text",
               success : function (data) {
                   $("#desc textarea").text(data);
               }
            });
        } else {
            $("#subcaption").html($(this).attr("date"));
        }
        if ($("#view-image img").height() > (screen.height-220)) {
            $("#view-image img").height(screen.height-220);
            $("#view-image img").width("auto");
        }
    });

    // init
    $("#preview img").load(function() {
        $("#first").trigger("click");
    });

    /* THEME CODE */
    $("#desc textarea").click(function() {
        $(this).select();
    });

}); 