function enviar (){
    if(document.getElementById("nome").value == ""){
        alert("esqueceu o nome parça")
    }

    else if(document.getElementById("email").value == ""){
        alert("digite seu email")
    }

    else if(document.getElementById("senha").value == ""){
        alert("digite sua senha")
    }

    else if(document.getElementById("confirmacaosenha").value ==""){
        alert("confirme sua senha")
    }

    else if(document.getElementById("confirmacaosenha").value != document.getElementById("senha").value){
        alert("digite senhas iguais")
    }

    else{
        alert("Usuário cadastrado com sucesso")
    }


}