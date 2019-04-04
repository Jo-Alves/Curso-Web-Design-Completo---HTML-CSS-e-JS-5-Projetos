
function EscreverDados(){
    var _nome = document.querySelector("#txtNome").value;
    var _sobrenome = document.querySelector("#txtSobreNome").value;
    var _datanascimento = document.querySelector("#dtNascimento").value;
    if(_nome != "" && _sobrenome !="" && _datanascimento != ""){

        document.querySelector("#element").innerHTML = "Nome: " + _nome + "<br> SobreNome: " + _sobrenome + "<br>Data de nascimento: " + _datanascimento;
        
    }
    else
    alert("Preencha todos os campos!");
}