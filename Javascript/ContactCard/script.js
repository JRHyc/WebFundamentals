$(document).ready(function(){

    // $(document.body).on("click",function(){
    
    // });
    
    $("#submitButton").click(function(){
        var name = $("#firstInput").val();
        var surname = $("#lastInput").val();
        var desc = $("#textBox").val();
        
        var bCard = "<div class='bCard'>" + "<h2>" + name + " " +  surname + "</h2>"+ "<br>" + "<p>Click Here</p><p hidden>" + desc + "</p>" + "</div>";
        $("#rightSide").append(bCard);
        $("form").trigger("reset");
        return false;
        
    })
    
        $(document).on("click", ".bCard", function(){
            $(this).children("h2,p").toggle();
    });
    
    });
    
    // $("button").click(function(){
    //     var name = $("#data_first").val();
    //     var surname = $("#data_last").val();
    //     var email = $("#data_email").val();
    //     var contact = $("#data_contact").val()
    //     var markup = "<tr><td>" + name + "</td><td>" + surname + "</td><td>" +  email + "</td><td>" + contact + "</td></tr>";
    //     $("table tbody").append(markup);
    // }) 
    // $("#business_cards").click(function(){

        // $(document).ready(function(){
        //     console.log("doc is ready")
        //     $("#submit").click(function(){
        //         //console.log('logging: 1');
        //         var first = $("#firstname").val();
        //         var surname = $("#lastname").val();
        //         var describe = $("textarea").val();
        //         var biz = first +" "+ surname;
        //         console.log("logging: 2", biz, describe);
        //         $("#card").append("<div class='info'><h2> "+biz+" </h2>"+"<p>Click for more details</p><p hidden>"+describe+"</p></div>");
        //         return false;
        //         //$("").toggle(describe);
        //     });
        //     $(document).on('click', '.info', function() {
        //         $(this).children('p').toggle('slow');
        //     });
        // });