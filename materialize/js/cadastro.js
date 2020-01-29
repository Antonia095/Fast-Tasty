
var criarUsuario = document.getElementById('criarUsuario');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

criarUsuario.addEventListener('click', function(){

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value,senha.value)
    .then(function(){
        alert("bem vindo");
    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar');
    });

});


 





    