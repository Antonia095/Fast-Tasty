

var  criarUsuario  =  document.getElementById ( 'criarUsuario');

var  nome  =  document.getElementById ('nome');
var  email  =  document.getElementById ('email');
var  senha  =  document.getElementById ('senha');
var  sobrenome  =  document.getElementById ('sobrenome');
var  telefone  =  document.getElementById ('telefone');
var  endereco  =  document.getElementById ('endereco');

criarUsuario.addEventListener('click', function(){
    createUser(nome.value, sobrenome.value, telefone.value, endereco.value, senha.value, email.value);
});

function createUser(nome, sobrenome, telefone,endereco,senha, email){
    var user = {
        nome : nome,
        sobrenome : sobrenome,
        telefone : telefone,
        endereco : endereco,
        senha : senha,
        email : email
    };

    firebase.database().ref().child('users').push(user);
  }

    criarUsuario.addEventListener('click', function(){

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value,senha.value)
    .then(function(){
        alert("bem vindo");
       window.location = '../view/telaInicialCliente.html';
        

    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar');
    });

  
});


  