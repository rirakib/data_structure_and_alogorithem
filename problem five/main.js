//problem 1^1+2^2+3^3+...+n^n

//algorithem 

//input value of N
//sum = 0 and i=1;
//set sum = sum + i*i
// set i = i+1
//reapet until I<=N
//display sum
//exit

var sum = 0;
var n=3;
for(let i=1;i<=n;i++){
    sum = sum + i*i;
}
console.log(`sum = ${sum}`);

