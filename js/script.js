// Contador de peças ativas
function atualizarContador() {
    const conta = document.querySelectorAll(".card-info.ativa").length;
    const Contador = document.getElementById("Contador");
    if(conta == 6){
        Contador.innerText = "Parabéns, você completou a fase 1!";
    }else{
        Contador.innerText = "Quantidade de peças ativas: " + conta;
    }
}

const pecas = document.querySelectorAll(".card-info");

pecas.forEach(function(peca) {

    peca.addEventListener("click", function() {

        const status = peca.querySelector("strong");

        peca.classList.add("ativa");

        status.innerText = "Desbloqueado";
        status.style.color = "#2bbd1e";

        atualizarContador();
    });

});

// Para criar a peça 1
const peca1 = document.getElementById("peca1");
const iconePeca1 = document.getElementById("iconePeca1");
const textoPeca1 = document.getElementById("textoPeca1");

//Inicia a função da peça 1
peca1.addEventListener("click", function(){  
    iconePeca1.innerText = "🛠️";
    textoPeca1.innerText = "Clique para abrir um resumo básico de JavaScript e DOM."
    peca1.addEventListener("click" , function(){      
        window.open("pagina.html");
    });
});


// Para criar a função da peça 2
const peca2 = document.getElementById("peca2");
const iconePeca2 = document.getElementById("iconePeca2");
const textoPeca2 = document.getElementById("textoPeca2");

// Inicia a função da peça 2
peca2.addEventListener("click", function(){
    if (peca2.classList.contains("verde")) {
        peca2.style.background = "#c52222";
        iconePeca2.innerText = "🔴";
        textoPeca2.innerText = "Clique para trocar para verde!";
        peca2.classList.remove("verde");
    } else {
        peca2.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
        iconePeca2.innerText = "🟢";
        textoPeca2.innerText = "Clique para trocar para vermelho!";
        peca2.classList.add("verde");
    }
});


// Para criar a peça 3
const peca3 = document.getElementById("peca3");
const iconePeca3 = document.getElementById("iconePeca3");
const textoPeca3 = document.getElementById("textoPeca3");

// Inicia a função da peça 3
peca3.addEventListener("click", function(){
    iconePeca3.innerText = "🎨";
    textoPeca3.innerText = "Clique para abrir um resumo avançado de JavaScript e DOM."
    peca3.addEventListener("click" , function(){      
        window.open("pagina2.html");
    });
});


// Para criar a peça 4
const peca4 = document.getElementById("peca4");
const iconePeca4 = document.getElementById("iconePeca4");
const textoPeca4 = document.getElementById("textoPeca4");

// Inicia a função da peça 4
peca4.addEventListener("click", function(){
    if(peca2.classList.contains("foguete")){
        iconePeca4.innerText = "💥";
        textoPeca4.innerText = "Meu deus! Você realmente explodiu o foguete?!";
    }else{
        iconePeca4.innerText = "🚀";
        textoPeca4.innerText = "Clique para explodir o foguete";    
        peca2.classList.add("foguete");    
    }
});


// Para criar a peça 5
const peca5 = document.getElementById("peca5");
const iconePeca5 = document.getElementById("iconePeca5");
const textoPeca5 = document.getElementById("textoPeca5");
let broto = 0;

// Inicia a função da peça 5
peca5.addEventListener("click", function(){
    broto++; 
    if(broto >= 10){
        iconePeca5.innerText = "🌳";
        textoPeca5.innerText = "Parabéns! Seu broto cresceu e virou uma árvore!";
    } else {
        iconePeca5.innerText = "🌱";
        textoPeca5.innerText = "Clique 10 vezes para o broto crescer! (" + broto + "/10)";
    }
});


// Para criar a peça 6
const peca6 = document.getElementById("peca6");
const iconePeca6 = document.getElementById("iconePeca6");
const textoPeca6 = document.getElementById("textoPeca6");

// Inicia a função da peça 6
peca6.addEventListener("click", function(){
    // Adição de um Easter egg na peça 6 na parte do status
    const EasterEgg = document.getElementById("EasterEgg");
    EasterEgg.addEventListener("click", function(){
        EasterEgg.innerText = "sutats";
    });

    // Adição de outro Easter egg na peça 6 na parte do status
    const EasterEgg2 = document.getElementById("EasterEgg2");
    EasterEgg2.addEventListener("click", function(){
        EasterEgg2.innerText = "60 açeP";
    });

    iconePeca6.innerText = "✖️";
    textoPeca6.innerText = "Parabéns! Você ativou a peça 6, ela não faz mais nada mesmo.";
});



