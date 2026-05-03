const pecas = document.querySelectorAll(".card-info");
const peca1 = document.getElementById("peca1");

// Para mudar o icone de cada peça especificamente
const iconePeca1 = document.getElementById("iconePeca1");
const iconePeca2 = document.getElementById("iconePeca2");
const iconePeca3 = document.getElementById("iconePeca3");
const iconePeca4 = document.getElementById("iconePeca4");
const iconePeca5 = document.getElementById("iconePeca5");
const iconePeca6 = document.getElementById("iconePeca6");

// Para mudar o texto de cada peça especificamente
const textoPeca1 = document.getElementById("textoPeca1");
const textoPeca2 = document.getElementById("textoPeca2");
const textoPeca3 = document.getElementById("textoPeca3");
const textoPeca4 = document.getElementById("textoPeca4");
const textoPeca5 = document.getElementById("textoPeca5");
const textoPeca6 = document.getElementById("textoPeca6");

// Para criar a terceira peça
const peca3 = document.getElementById("peca3");
let broto = 0;

// Inicia a função da peça 3
peca3.addEventListener("click", function(){
    broto++; 
    if(broto >= 10){
        iconePeca3.innerText = "🌳";
        textoPeca3.innerText = "Parabéns! Seu broto cresceu e virou uma árvore!";
    } else {
        iconePeca3.innerText = "🌱";
        textoPeca3.innerText = "Clique 10 vezes para o broto crescer! (" + broto + "/10)";
    }
});

// Para criar a quarta peça
const peca4 = document.getElementById("peca4");
let foguete = 0;

peca4.addEventListener("click", function(){
    if(foguete == 0){
        iconePeca4.innerText = "🚀";
        textoPeca4.innerText = "Clique para explodir o foguete";
        foguete++;
    }else{
        iconePeca4.innerText = "💥";
        textoPeca4.innerText = "Meu deus! Você realmente explodiu o foguete?!";        
    }
});


pecas.forEach(function(peca) {

  peca.addEventListener("click", function() {

    const status = peca.querySelector("strong");

    peca.classList.add("ativa");
    peca.classList.remove("bloqueada");

    status.innerText = "Desbloqueado";
    status.style.color = "#2bbd1e";

    //Inicia a função da peça 1
    if (peca.id === "peca1") {
        iconePeca1.innerText = "🔓";
        textoPeca1.innerText = "Clique novamente para abrir um resumo de JavaScript e DOM."
        peca1.addEventListener("click" , function(){
            window.open("pagina.html");
        });
    }

    //Inicia a função da peça 2
    if (peca.id === "peca2") {
        if (peca.classList.contains("verde")) {
            peca.style.background = "#c52222";
            iconePeca2.innerText = "🔴";
            textoPeca2.innerText = "Clique para trocar para verde!";
            peca.classList.remove("verde");
        } else {
            peca.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
            iconePeca2.innerText = "🟢";
            textoPeca2.innerText = "Clique para trocar para vermelho!";
            peca.classList.add("verde");
        }
    }

});

});