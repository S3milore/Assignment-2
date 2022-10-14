//A counter that counts up to 1000, allows user specify the
//count step and generates random numbers without 'math.random()'
let arr=[];
function counter(val,step){
for(let i=0; i<1000; i++)
arr.push(val+=step);
return arr;
}
console.log(counter(1,1));