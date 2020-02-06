var criarChef = document.getElementById('criarChef');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

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