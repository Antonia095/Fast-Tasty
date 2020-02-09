
var cadastraPra = document.getElementById('cadastraPra');

var nomePrato = document.getElementById('nomePrato');
var descricao = document.getElementById('descricao');
var valor = document.getElementById('valor');

var fileButton = document.getElementById('fileButton');
var progress = document.getElementById('progress');

cadastraPra.addEventListener('click', function(){
    cadastraPratos(nomePrato.value, descricao.value, valor.value);
});

function cadastraPratos( nomePrato, descricao, valor){
    var prato = {
        nomePrato : nomePrato,
        descricao : descricao,
        valor : valor
    };
    
    firebase.database().ref().child('pratos').push(prato);

}

 fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('fotosPratos/' + file.name);

    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot){
        var porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 20;
        progress.value = porcentage;

    },
    function error(err){
        console.log(err);
    },
    function complete(){
        alert('envio da foto completa');
    }
    
    )
});