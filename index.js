

let count=10;
console.log(count);

let myAge=33;
console.log(myAge);

let a=10;
let b=25;
let c=a-b;
console.log(c);

let count1=10;
count1=20;
count1=450;
count1=220;
console.log(count1);

let d=10;
d=d+1;
console.log(d);

let e=5;
e=e+10;//15
e=e-5;//10
e=e+10;//20
console.log(e);//20

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

function countdown(){
    console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
    
}
countdown();

function race(){
    console.log(42);
    
}race();

let lap1=34;
let lap2=33;
let lap3=36;
function a1(){
    console.log(lap1+lap2+lap3);
    
}
a1();

let z=0;
function a2(){
    z+=1;
}
a2();
a2();
a2();
a2();
console.log(z);

document.getElementById("counter").innerText=5;

let countEl=document.getElementById("counter");
console.log(countEl);

let count3=0;
function increment(){
    count3++;
    countEl.innerText=count3;
    console.log("clicked",+countEl);
    
}
increment();








