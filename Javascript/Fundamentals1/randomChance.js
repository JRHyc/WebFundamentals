var jackPot = Math.trunc(Math.random() * 50) + 51;

var spin = Math.trunc(Math.random() * 100) +1;

function machine(){
    for(var i = 50; i >= 0; i--){
        spin = Math.trunc(Math.random() * 100) +1;
            console.log(spin + "            quarters left: " + i);
        if(i === 0){
            console.log("Can i borrow a quarter please!? Pretty Please!?!?")
        }
        if(spin === 33){
            console.log(" I just won " + jackPot + " quarters!!!!");
            console.log("I'm taking my " + (jackPot + i) + " quarters and going home!")
            break;
        }    

    }
}
machine();
    

