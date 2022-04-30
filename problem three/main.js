//problem 2+4+6+...+=100 and avg=?


//algorithem 

// let sum =0; avg=0; and i=2;
// sum = sum + i;
// i = i+2;
// reapet until i<=100
// avg = sum/50
//display sum and avg
//exit

var sum = 0;
var avg = 0;
for(let i=2;i<=100; i = i+2){
    sum = sum + i;
}
var avg = sum/50;
console.log(`sum = ${sum} and avg = ${avg}`);
