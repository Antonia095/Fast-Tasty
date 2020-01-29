document.getElementById('cadastro').addEventListener('submit',cadastraUsuario);

function cadastraUsuario(e){
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var senha = document.getElementById('senha').value;

    if(!nome || !sobrenome || !telefone || !cpf || !email || !endereco || !senha){
        alert('por favor, preencha os campos em branco');
    }

    usuario01 = {
        nomeUser : nome,
        sobrenomeUser : sobrenome,
        telefoneUser : telefone,
        cpfUser : cpf,
        emailUser : email,
        enderecoUser : endereco,
        senhaUser : senha
    }
    console.log(usuario01);

    if(localStorage.getItem('usuario') === null){
        var cliente = [];
        cliente.push(usuario01);
        localStorage.setItem('usuario', JSON.stringify(cliente));
    }
    else{
        var cliente = JSON.parse(localStorage.getItem('usuario'));
        cliente.push(usuario01);
        localStorage.setItem('usuario',JSON.stringify(cliente));
    }
   
    e.preventDefault();
}