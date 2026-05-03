const pecas = document.querySelectorAll(".card-info");

pecas.forEach(function(peca) {

  peca.addEventListener("click", function() {

    const texto = peca.querySelector("p");
    const status = peca.querySelector("strong");

    peca.classList.add("ativa");
    peca.classList.remove("bloqueada");

    status.innerText = "Desbloqueado";
    status.style.color = "#f1f1f1";

    texto.innerText = "Parabéns! Você ativou essa peça.";

    if(peca.classList.contains("ativa")){
        const peca1 = document.getElementById("peca1");
        peca1.addEventListener("click", function(){
            window.open(URL = "pagina.html");
        });
    }
    
  });

});