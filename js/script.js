const pecas = document.querySelectorAll(".card-info");

pecas.forEach(function(peca) {

  peca.addEventListener("click", function() {

    const texto = peca.querySelector("p");
    const status = peca.querySelector("strong");

    peca.classList.add("ativa");
    peca.classList.remove("bloqueada");

    status.innerText = "Desbloqueado";
    status.style.color = "#22c55e";

    texto.innerText = "Parabéns! Você ativou essa peça.";

  });

});