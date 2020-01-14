function validar( ){
    var email = login.email.value;
    var senha = login.senha.value;

    if(email == ""){
        alert("por favor, preencha o campo email");
        login.email.focus();
        return false;
    }
    if(senha == "" || senha.length <= 5){
        alert("por favor, preencha o campo senha, com no minimo 6 caracteres");
        login.senha.focus();
        return false;
}
}