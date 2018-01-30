$(document).ready(function(){

    $("#hide").click(function(){
        $("#hideParagraph p").hide();
    });
    $("#show").click(function(){
        $("#hideParagraph p").show();
    });
    $("#toggle").click(function(){
        $("#toggleParagraph p").toggle();
    });
    $("#up").click(function(){
        $("#slideUpandDown p").slideUp();
    });
    $("#down").click(function(){
        $("#slideUpandDown p").slideDown();
    });
    $("#slide").click(function(){
        $("#slideUpandDown p").slideToggle();
    });
    $("#fadeIn").click(function(){
        $("#fadeParagraph p").fadeIn();
    });
    $("#fadeOut").click(function(){
        $("#fadeParagraph p").fadeOut();
    });
    $("#changeColor").click(function(){
        $("#addClassParagraph p:nth-child(7)").addClass("pink");
    });
    $("#beforeButton").click(function(){
        $("h1").before(".before works!!!");
    });
    $("#afterButton").click(function(){
        $("p").before(".after works!!!");
    });
    $("#appendButton").click(function(){
        $("#wrapper").append("<b>GoodBye!!!!!!!!!!</b>");
    });
    $("#replaceHTML").click(function(){
        $("p").html("Its ok. Go home. Youve worked hard");
    });
    $("#attrButton").click(function(){
        alert("Image width: " + $("#aussie").attr("width"));
    });
});