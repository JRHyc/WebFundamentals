$(document).ready(function() {


    
    $('form').submit(function() {
        var city = $("#cityName").val();
         
        console.log(city);
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&&appid=269f022d3c2fa5868305d16ff337450f", function(res) {
            console.log(res);
        var K = (res.main.temp);
        console.log(K);
        var KtoF = Math.trunc((9/5) * (K - 273) + 32);
        console.log(KtoF);
        $('h1').html(city);
        $('h2').html(KtoF);
            
        }, 'json');
        
        return false;
    });
});


// http://api.openweathermap.org/data/2.5/weather?q=chicago&&appid=269f022d3c2fa5868305d16ff337450f
// 269f022d3c2fa5868305d16ff337450f
