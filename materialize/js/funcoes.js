document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

     
  });

  //Inicia menu mobile
  const elemsSidenav = document.querySelectorAll(".sidenav");
  const instancesSidenav = M.Sidenav.init(elemsSidenav);

  //Função de avaliação
function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("index.html");
 url = url[0];

var s1 = document.getElementById("s1").src;
var s2 = document.getElementById("s2").src;
var s3 = document.getElementById("s3").src;
var s4 = document.getElementById("s4").src;
var s5 = document.getElementById("s5").src;
var avaliacao = 0;

if (estrela == 5){
if (s5 == url + "img/star0.png") {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star1.png";
document.getElementById("s5").src = "img/star1.png";
avaliacao = 5;
} else {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star1.png";
document.getElementById("s5").src = "img/star1.png";
avaliacao = 5;
}}

if (estrela == 4){
if (s4 == url + "img/star0.png") {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star1.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 4;
} else {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star1.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 4;
}}

if (estrela == 3){
if (s3 == url + "img/star0.png") {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 3;
} else {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star1.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 3;
}}

if (estrela == 2){
if (s2 == url + "img/star0.png") {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star0.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 2;
} else {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star1.png";
document.getElementById("s3").src = "img/star0.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 2;
}}

if (estrela == 1){
if (s1 == url + "img/star0.png") {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star0.png";
document.getElementById("s3").src = "img/star0.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 1;
} else {
document.getElementById("s1").src = "img/star1.png";
document.getElementById("s2").src = "img/star0.png";
document.getElementById("s3").src = "img/star0.png";
document.getElementById("s4").src = "img/star0.png";
document.getElementById("s5").src = "img/star0.png";
avaliacao = 1;
}}

//document.getElementById('rating').innerHTML = avaliacao;

}


