// let food;
// fetch(`https://foodish-api.herokuapp.com/api/images/biryani`)
// .then(function(response){
//   return response.json();
// }).then(function(response){
// document.querySelector(".food1").src=(response['image'])
// });
let link="https://newsapi.org/v2/everything?q=restaurant&apiKey=86001c4514424a6b93f015cdab1b8a7f"
let food;
fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey=5ce63e6535cf44a7b33b9a248e747094
`)
.then(function(response){
  return response.json();
}).then(function(response){
console.log(response)
});
