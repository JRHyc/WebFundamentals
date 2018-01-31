$(document).ready(function(){
    console.log("im ready");
    
    
    $('#submitButton').click(function(){
        $("#myTable").append($("#firstInput").val());
        $("#myTable").append($("#lastInput").val());
        $("#myTable").append($("#emailInput").val());
        $("#myTable").append($("#contactInput").val());
            return false;
    })
        
});