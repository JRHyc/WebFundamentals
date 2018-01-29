// If You Don't Mind, Can I Have The Time?
var hour = 9;
var min = 22;
var period = "AM";

if((min >= 0 && min < 30) && (period === "AM")){
    console.log("It's just after " + hour + " in the morning");
}
if((min >= 0 && min < 30) && (period === "PM")){
    console.log("It's just after " + hour + " in the evening");
}      

if((min > 30 && min < 60) && (period === "AM")){
    hour = hour + 1;
    console.log("It's almost " + hour + " in the morning");    
}
if((min > 30 && min < 60) && (period === "PM")){
    hour = hour + 1;
    console.log("It's almost " + hour + " in the evening");
}

