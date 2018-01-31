$(document).ready(function(){

    // $('img').click(function() {
    //     $(this).attr( "src" ,$(this).attr('data-alt-src'));
    //   });



$("img").click(function() {
var src = $('img').attr('src');
    if(src == 'ninja0.png') {
        $(this).attr("src","cat0.png");
    }
$("img").click(function() {
    var src = $('img').attr('src');
        if(src == 'ninja1.png') {
            $(this).attr("src","cat1.png");
            }
            
            
        });    
    
});
}); 
// if(src == "cat0.png") {
//     $(this).attr("src","ninja0.png"); 
// }
// if(src == 'ninja1.png') {
//     $(this).attr("src","cat1.png");

// } else if(src == "cat1.png") {
//     $(this).attr("src","ninja1.png"); 
// }