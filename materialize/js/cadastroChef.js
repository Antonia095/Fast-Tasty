var chef = null;

criarChef.onclick = function(){
var no = nome.value;
var ne = negocio.value;
var te = telefone.value;
var  en = endereco.value;
var cp= cpf.value;
var ema= email.value;
var se = senha.value;
 
chef = new Chef(no, ne, te, en, cp, ema, se);
firebase.database().ref().child('chefs').push(chef);



}

 function Chef(nome, negocio, telefone, endereco, email, senha){
     
         this.nome = nome;
         this.negocio = negocio;
         this.telefone = telefone;
         this.endereco = endereco;
         this.cpf = cpf;
         this.email = email;
         this.senha = senha;
         
 }

     

criarChef.addEventListener('click', function(){

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value,senha.value)
    .then(() => {
        alert("bem vindo");
        window.location = '../view/telaInicalChef.html';
        
    })
    .catch((error) =>{
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar');
    });

});






