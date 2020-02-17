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
var CARD_CONTAINER = document.getElementsByClassName('card-container')[0];
var prato = [];
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


//Adicionando informação a tela de cliente
function adicionarCardTela(informacao){
let header = document.createElement("h3");
header.innerText = informacao.nome;
header.classList.add('card-title');

let content = document.createElement("p");
content.classList.add('card-text');
content.innerText = informacao.descricao;

let inner = document.createElement("div");
inner.classList.add('row');
let button_add = document.createElement("button");
button_add.classList.add('btn', 'btn-link' , 'col-3');
button_add.setAttribute('onclick' , "curtir(" + informacao.id + ")");
button_add.innerText = 'Adicionar';
inner.appendChild(button_add);

//CARD

let pratos = document.createElement("div");
pratos.classList.add('pratos');
pratos.id = informacao.id;
let card_body = document.createElement("div");
card_body.classList.add('card-body');

card_body.appendChild(header);
card_body.appendChild(content);
card_body.appendChild(inner);
pratos.appendChild(card_body);

//Insere no container
CARD_CONTAINER.appendChild(pratos);
}


//Função de atualizar tela cadastro
function updateScreen(){

document.getElementById("campoNomePrato").value = "";
document.getElementById("campoDescricao").value = "";
document.getElementById("campoValor").value = "";
document.getElementById("campoImagem").value = "";
}

