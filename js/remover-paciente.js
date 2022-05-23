// var pacientes = document.querySelectorAll(".paciente"); // Utilizado como exemplo

var tabela = document.querySelector("#tabela-pacientes");

// Utilizado como exemplo
/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(event){
        this.remove();
    })
});*/

tabela.addEventListener("dblclick", function(event){
    /*var alvoDoEvento = event.target; // TD
    var paiDoAlvo = alvoDoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();*/
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});