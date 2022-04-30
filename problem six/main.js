// Check Bigger number between P,Q,R

//algorithem


// input value of p q r and set largeNumber 
// when p>q
        // then compare p and r
            // p>r then set largeNumber = p
            // otherwise set largeNumber = r
// otherwise --> when q>p
    // compare q and r 
        //q>r then set largeNumber = q
        // otherwise largeNumber = r
// display largNumber 
// exit 

var p =16;
var q=22;
var r=8;
var largeNumber;

if(p>q){
    if(p>r){
        largeNumber = p;
    }else{
        largeNumber = r;
    }
}else{
    if(q>r){
        largeNumber = q;
    }else{
        largeNumber = r;
    }
}
console.log(`large number = ${largeNumber}`);

