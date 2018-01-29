
function rangePrint(startPoint, endPoint, skipPoint = 1){
    if(endPoint === undefined){
        endPoint = startPoint;
        startPoint = 0;    
    }
    for(var i = startPoint; i < endPoint; i += skipPoint){
        console.log(i);
    }
  }
rangePrint(4);