var CARD_CONTAINER = document.getElementsByClassName('card-container')[0];
var pratos = [];
var ref = firebase.database().ref('pratos/' + pratos.nome);

firebase.database().ref('pratos/' + pratos.nome).push(pratos).then(() =>{
    adicionarCardTela(pratos)
  });

  
  document.addEventListener("DOMContentLoaded" ,  function(){
    ref.once('value').then(snapshot => {

      console.log(snapshot.val());
    });
  });
  
  //Adicionando informação a tela de cliente
  function adicionarCardTela(pratos){
  let header = document.createElement("h3");
  header.innerText = pratos.nome;
  header.classList.add('card-title');
  
  let content = document.createElement("p");
  content.classList.add('card-text');
  content.innerText = pratos.descricao;
  
  let inner = document.createElement("div");
  inner.classList.add('row');
  let button_add = document.createElement("button");
  button_add.classList.add('btn', 'btn-link' , 'col-3');
  button_add.setAttribute('onclick' , "curtir(" + pratos.id + ")");
  button_add.innerText = 'Adicionar';
  inner.appendChild(button_add);
  
  //CARD
  
  let prato = document.createElement("div");
  prato.classList.add('pratos');
  prato.id = pratos.id;
  let card_body = document.createElement("div");
  card_body.classList.add('card-body');
  
  card_body.appendChild(header);
  card_body.appendChild(content);
  card_body.appendChild(inner);
  prato.appendChild(card_body);
  
  //Insere no container
  CARD_CONTAINER.appendChild(prato);
  };
  