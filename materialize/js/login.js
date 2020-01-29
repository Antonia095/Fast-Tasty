var entrar = document.getElementById('entrar');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

entrar.addEventListener('click',function(){
    firebase
        .auth()
        .signInWithEmailAndPassword(email.value,senha.value)
        .then(function(result){
            console.log(result);
            alert("autentificado");
        })
        .catch(function(error){
            console.log(error.code);
            console.log(error.mensage);
            alert("falha ao fazer login, verifique seu email.");
        });
});