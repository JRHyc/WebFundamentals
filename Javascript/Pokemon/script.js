
$(document).ready(function(){
 
var LoopPhotos = '';
var addPhotos = '';
for(var i = 1; i < 152; i++){
    LoopPhotos = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";

    addPhotos += '<img id="'+ i +'" src =' + LoopPhotos + '>';
   
} 
$("#pokemon").append(addPhotos);


$('img').on('click', function(){
    var photoCopy = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + $(this).attr('id')  + ".png"
    $('#pokedex').html('<img src = "' + photoCopy + '"/>');


$.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr('id') + "/", function(res) {
    $('#pokedex').append('<h1>' + res.name + '</h1>');
    $('#pokedex').append('<h1>Type</h1>')
    for(var i = 0; i < res.types.length; i++){
        
    $('#pokedex').append("<h4>" + res.types[i].type.name + "</h4>");}
    $('#pokedex').append('<h1>Height</h1><h4>' + res.height + '</h4>');
    $('#pokedex').append('<h1>Weight</h1><h4>' + res.weight + '</h4>');
 },"json")});


});