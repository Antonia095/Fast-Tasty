
var criarChef = document.getElementById('criarChef');

var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var telefone = document.getElementById('telefone');
var  endereco  = document.getElementById ('endereco');
var cpf = document.getElementById('cpf');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

criarChef.addEventListener('click', function(){
    createChef(nome.value, sobrenome.value, telefone.value,endereco.value, email.value, senha.value);
});

 function createChef(nome, sobrenome, telefone, endereco, email,senha){
     var chef = {
         nome : nome,
         sobrenome : sobrenome,
         telefone : telefone,
         endereco : endereco,
         email : email,
         senha : senha
         

     };
     firebase.database().ref().child('chefs').push(chef);
 }

criarChef.addEventListener('click', function(){

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value,senha.value)
    .then(function(){
        alert("bem vindo");
        window.location = '../view/telaInicialChef.html';
        
    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar');
    });

});