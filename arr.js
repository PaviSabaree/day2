var x= function test(){
    console.log('hi');
}
var y=()=> console.log('Hello');

x();
y();

var sum=(a,b)=> a+b;
console.log(sum(2,4))

var square = c=> c*c;
console.log(square(4))

var z=[1,2,3,43,23,5];
console.log(z.map(p=>p+10))