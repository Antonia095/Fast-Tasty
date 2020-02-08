

var  criarUsuario  =  documento . getElementById ( 'criarUsuario' ) ;

var  nome  =  documento.getElementById ('nome');
var  email  =  documento.getElementById ('email');
var  senha  =  documento.getElementById ('senha');
var  sobrenome  =  documento.getElementById ('sobrenome');
var  telefone  =  documento.getElementById ('telefone');
var  endereco  =  documento.getElementById ('endereco');

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


  