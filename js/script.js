let LIMITE = 3;

const Contador = document.getElementById("Contador");
const pecas = document.querySelectorAll(".card-info");

let cliquePeca1 = 0;
let cliquePeca3 = 0;
let cliquePeca4 = 0;
let cliquePeca5 = 0;
let foguete = 0;
let EasterEgg = document.getElementById("EasterEgg");
let EasterEgg2 = document.getElementById("EasterEgg2");


// -------- CONTADOR --------
function atualizarContador() {

    const conta = document.querySelectorAll(".card-info.ativa").length;

    if (conta === LIMITE) {
        Contador.innerText = "Limite atingido!";
    } 
    else if (conta === pecas.length) {
        Contador.innerText = "Você venceu!";
    } 
    else {
        Contador.innerText = "Quantidade de peças ativas: " + conta;
    }
}

// -------- RESET --------
function resetarJogo() {

    pecas.forEach(function(peca){

        peca.classList.remove("ativa");
        peca.classList.add("bloqueada");

        const status = peca.querySelector("strong");
        const icone = peca.querySelector(".iconePeca");
        const texto1 = document.getElementById("textoPeca1");
        const texto2 = document.getElementById("textoPeca2");
        const texto3 = document.getElementById("textoPeca3");
        const texto4 = document.getElementById("textoPeca4");
        const texto5 = document.getElementById("textoPeca5");
        const texto6 = document.getElementById("textoPeca6");

        icone.innerText = "🔒";
        status.innerText = "Bloqueada";
        status.style.color = "#facc15";
        texto1.innerText = "Clique na peça para ativar a peça 01!";
        texto2.innerText = "Clique na peça para ativar a peça 02!";
        texto3.innerText = "Clique na peça para ativar a peça 03!";
        texto4.innerText = "Clique na peça para ativar a peça 04!";
        texto5.innerText = "Clique na peça para ativar a peça 05!";
        texto6.innerText = "Clique na peça para ativar a peça 06!";

        peca.style.background = "rgba(15, 23, 42, 0.85)";
    });

    cliquePeca1 = 0;
    cliquePeca3 = 0;
    cliquePeca4 = 0;
    cliquePeca5 = 0;
    foguete = 0;
    EasterEgg.innerText = "status";
    EasterEgg2.innerText = "Peça 06";

    atualizarContador();
}

// -------- SISTEMA PRINCIPAL --------
pecas.forEach(function (peca) {

    peca.addEventListener("click", function () {

        const ativas = document.querySelectorAll(".card-info.ativa").length;

        const status = peca.querySelector("strong");
        const icone = peca.querySelector(".iconePeca");
        const texto = peca.querySelector("p");

        if (!peca.classList.contains("ativa") && ativas >= LIMITE) {
            alert("Limite atingido!");
            return;
        }

        if (peca.classList.contains("ativa") && peca.id !== "peca1" && peca.id !== "peca2" 
        && peca.id !== "peca3" && peca.id !== "peca4" && peca.id !== "peca5" && peca.id !== "peca6") {
            return;
        }

        if (!peca.classList.contains("ativa")) {

            peca.classList.add("ativa");
            peca.classList.remove("bloqueada");

            status.innerText = "Desbloqueado";
            status.style.color = "#2bbd1e";

            peca.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
        }

        // -------- PEÇA 1 --------
        if (peca.id === "peca1") {
            cliquePeca1++;

            if (cliquePeca1 === 1) {
                icone.innerText = "🛠️";
                texto.innerText = "Clique novamente para abrir o resumo.";
            }

            if (cliquePeca1 === 2) {
                window.open("pagina.html");
                cliquePeca1 = 0;
                cliquePeca1++;
            }
        }


        // -------- PEÇA 2 --------
        if (peca.id === "peca2") {

            if (peca.classList.contains("verde")) {
                peca.style.background = "#c52222";
                icone.innerText = "🔴";
                texto.innerText = "Clique para trocar para verde!";
                peca.classList.remove("verde");
            }else{
                peca.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
                icone.innerText = "🟢";
                texto.innerText = "Clique para trocar para vermelho!";
                peca.classList.add("verde");
            }
        }


        // -------- PEÇA 3 --------
        if (peca.id === "peca3") {
            cliquePeca3++;
            if (cliquePeca3 === 1) {
                icone.innerText = "🎨";
                texto.innerText = "Clique novamente para abrir o resumo avançado.";
            }

            if (cliquePeca3 === 2) {
                window.open("pagina2.html");
                cliquePeca3 = 0;
                cliquePeca3++;
            }
        }


        // -------- PEÇA 4 --------
        if (peca.id === "peca4") {

            if (cliquePeca4 === 1) {
                icone.innerText = "💥";
                texto.innerText = "Meu deus! Você realmente explodiu o foguete?!";
            }else{
                icone.innerText = "🚀";
                texto.innerText = "Clique novamente para explodir o foguete";
                cliquePeca4++;
            }
        }


        // -------- PEÇA 5 --------
        if (peca.id === "peca5") {
            cliquePeca5++;
            if (cliquePeca5 >= 10) {
                icone.innerText = "🌳";
                texto.innerText = "Parabéns! Seu broto cresceu e virou uma árvore!";
            }else{
                icone.innerText = "🌱";
                texto.innerText = "Clique 10 vezes para o broto crescer! (" + cliquePeca5 + "/10)";
            }
        }

        
        // -------- PEÇA 6 --------
        if (peca.id === "peca6") {

            icone.innerText = "✖️";
            texto.innerText = "Parabéns! Você ativou a peça 6, ela não faz mais nada mesmo.";

            EasterEgg.onclick = function() {
                EasterEgg.innerText = "sutats";
            };

            EasterEgg2.onclick = function() {
                EasterEgg2.innerText = "60 açeP";
            };
        }

        atualizarContador();
    });

});