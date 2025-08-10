var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style = "display:none"
     Bruna.style = "display:flex"
     SetaDireita.style = "display:none"
     SetaEsquerda.style = "display:flex"
}


function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
     Bruna.style = "display:none"
     SetaDireita.style = "display:flex"
     SetaEsquerda.style = "display:none"
}
