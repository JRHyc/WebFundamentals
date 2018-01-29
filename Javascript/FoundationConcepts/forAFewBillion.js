var pen = .005;
var sum = 0;
day = 0;

function count(){
for(i = 1; i < 31; i++){
    
    pen = pen * 2;
    sum = sum + pen;
    day = day + 1;
    console.log("Earned Day " + day + ": " + pen);
    console.log("After " + day + " days total is: " + sum);
    if(sum > 10000){
        console.log(sum + " only took " + day + " days!")   
    }
}        
}
count();