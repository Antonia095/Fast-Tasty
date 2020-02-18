document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
//  var instances = M.Sidenav.init(elems, options);    
});

//Inicia menu mobile
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav);

//Modal de finalizar compra
$(document).ready(function(){
  $('.modal').modal();
});

//Carrosel
$(document).ready(function () {
  $('.slider').slider();
});

//Persistencia no firebase
//var CARD_CONTAINER = document.getElementsByClassName('card-container')[0];
//var prato = [];

//var ref = firebase().ref('prato');
//adicionando na tela de cliente
//var pratosDoDia = document.getElementById('pratos');

//funcao de cadastro de prato
var nome = document.getElementById('campoNomePrato');
var descricao = document.getElementById('campoDescricao');
var valor = document.getElementById('campoValor');
var imagem = document.getElementById('campoImagem');


//Botao para adicionar prato
function salvarPratos(){
  adicionar(nome.value, descricao.value, valor.value, imagem.value); 
  updateScreen();
};

//Função para salvar prato
function adicionar(nome, descricao, valor,  imagem){
var pratos = {
      nome: nome,
      descricao: descricao,
      valor: valor,
      imagem: imagem
};
firebase.database().ref('pratos/' + pratos.nome).set(pratos).then(() =>{
  adicionarCardTela(pratos)
});
};
//Função de atualizar tela cadastro
function updateScreen(){
  
  document.getElementById("campoNomePrato").value = "";
  document.getElementById("campoDescricao").value = "";
  document.getElementById("campoValor").value = "";
  document.getElementById("campoImagem").value = "";
  }