console.log("Anne")
console.log(39)






































































function fnDestaque1Original(){
    document.getElementById("destaque1").src
}



function fnRegistroContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + " " + email + " " + mensagem 
    document.getElementById("informacoes").innerHTML = informacoesCompleta

    //limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mensagem").value = ""
}