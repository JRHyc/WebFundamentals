

function bdayCount(){
var days = 70;
    for(var i = 60; i >= 0; i--){
        if(days >= 30){
            console.log(days + " days until my birthday. Such a long time...");
            days = days -1;
        }    
        else if(days >= 5 && days < 30){
            console.log(days + " days till my birthday... I'm starting to get excited!" );
            days = days - 1; 
        }
        else if(days >= 1 && days < 5){
            console.log(days + " DAYS UNTIL MY BIRTHDAY!!!");
            days = days - 1;
        }
        else{
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }            
}
}   
bdayCount();

