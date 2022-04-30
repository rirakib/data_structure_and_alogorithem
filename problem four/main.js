//problem 1+2+3+...+n = ?

//algorithem 
// sum = 0
// i =1
// sum = sum + i
//i = i+1
//reapet until i<=n
//display sum
//exit

var sum = 0;
var n = 100;
for(let i=0;i<=n;i++){
    sum = sum + i;
}
console.log(`sum = ${sum}`);