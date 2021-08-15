let valueOld;
let oldPressedbutton;
let a;
let key = '38bc8a256d540165cef300062634c624';
let city;
let v=document.querySelector(".wind");
v.addEventListener("click",function(event){
  city=document.querySelector("input").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38bc8a256d540165cef300062634c624`).then(function(response){
    return response.json();
  }).then(function(response){
    document.querySelector("h4").innerHTML= `The temperature of ${city} is `+Math.round(response.main.temp-273);
  });


})


a= document.querySelector(".button-0");
a.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="0";

})
let c;
c= document.querySelector(".button-1");
c.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="1";

})
let e;
e= document.querySelector(".button-2");
e.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="2";

})
let f;
a= document.querySelector(".button-3");
a.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="3";

})
let d;
d= document.querySelector(".button-4");
d.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="4";

})
let g;
g= document.querySelector(".button-5");
g.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="5";

})
let h;
h= document.querySelector(".button-6");
h.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="6";

})
let i;
i= document.querySelector(".button-7");
i.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="7";

})
let j;
j= document.querySelector(".button-8");
j.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="8";

})
let k;
k= document.querySelector(".button-9");
k.addEventListener("click",function(event){
  let b=document.querySelector(".display");
  b.innerHTML +="9";

})
let l;
l =document.querySelector(".pl");
l.addEventListener("click",function(event){
let b=document.querySelector(".display");
 valueOld=b.innerHTML;
 b.innerHTML="";
 oldPressedbutton ="+";
})
let m;
m =document.querySelector(".eq");
m.addEventListener("click",function(event){
let b=document.querySelector(".display");
let valueNew;
 valueNew=b.innerHTML;
 b.innerHTML="";
 if (oldPressedbutton==="+"){
   b.innerHTML=parseInt(valueNew)+parseInt(valueOld);
 }else if(oldPressedbutton==="-"){
      b.innerHTML=parseInt(valueOld)-parseInt(valueNew);
 }else if(oldPressedbutton==="*"){
      b.innerHTML=parseInt(valueOld)*parseInt(valueNew);
 }else{
     b.innerHTML=parseInt(valueOld)/parseInt(valueNew);
 }

})
let n;
n =document.querySelector(".sub");
n.addEventListener("click",function(event){
let b=document.querySelector(".display");
 valueOld=b.innerHTML;
 b.innerHTML="";
 oldPressedbutton ="-";
})
let p;
p =document.querySelector(".mul");
p.addEventListener("click",function(event){
let b=document.querySelector(".display");
 valueOld=b.innerHTML;
 b.innerHTML="";
 oldPressedbutton ="*";
})
let q;
q =document.querySelector(".divi");
q.addEventListener("click",function(event){
let b=document.querySelector(".display");
 valueOld=b.innerHTML;
 b.innerHTML="";
 oldPressedbutton ="/";
})
