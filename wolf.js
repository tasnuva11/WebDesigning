// fetch('https://foodish-api.herokuapp.com/api/').then(function(response){
//   return response.json();
// }).then(function(response){
//
//   document.querySelector(".image").src=response['image'];
// })


// fetch('https://jsonplaceholder.typicode.com/posts/').then(function(response){
//   return response.json();
// }).then(function(response){
//
// document.querySelector(".a").innerHTML=response[9]['title'];
// })



let a;
fetch('https://jsonplaceholder.typicode.com/comments/').then(function(response){
  return response.json();
}).then(function(response){
for(let elements of response){
  a+=`<div class="form">
<h4>${elements['name']}</h4>
<h5>${elements['email']}</h5>
<h6>${elements['body']}</h6>
  </div>`
}document.querySelector("body").innerHTML=a;
})
