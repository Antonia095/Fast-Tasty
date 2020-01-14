function validar(){
    var nome = cadastroUsuario.nome.value;
    var sobrenome = cadastroUsuario.sobrenome.value;
    var telefone = cadastroUsuario.telefone.value;
    var cpf = cadastroUsuario.cpf.value;
    var email = cadastroUsuario.email.value;
    var endereco = cadastroUsuario.endereco.value;

    if(nome == "" || sobrenome == "" || telefone == "" || cpf == "" || email == "" || endereco == ""){
        alert("prencha os campos corretamente");
        cadastroUsuario.nome.focus();
        cadastroUsuario.sobrenome.focus();
        cadastroUsuario.telefone.focus();
        cadastroUsuario.cpf.focus();
        cadastroUsuario.email.focus();
        cadastroUsuario.endereco.focus();
        return false;
    }
}