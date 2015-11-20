$(document).ready(function() {
    $("#text").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        $('#wordcount').text(words);
        var goal = $("#goal").val();
        if (words >= goal) {
            $('#wordcount').css("color","#71B160");
            $('#progressbar').css("background", "#71B160");
            $('#progressbar').width(750);
        } else {
            $('#wordcount').css("color","#FF9955");
            $('#progressbar').css("background", "#FF9955");
            $('#progressbar').width((750.0/goal)*words);
        }
    });
}); 