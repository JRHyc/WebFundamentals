
$(document).ready(function(){


var LoopPhotos = '';
var addPhotos = '';
for(var i = 1; i < 152; i++){
    LoopPhotos = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";

    addPhotos += '<img src =' + LoopPhotos + '>';
    
} 
$("body").append(addPhotos);


});