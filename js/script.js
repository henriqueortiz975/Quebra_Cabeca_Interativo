let LIMITE = 3;

const pecas = document.querySelectorAll(".card-info");
const Contador = document.getElementById("Contador");

let broto = 0;
let foguete = 0;

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

        icone.innerText = "🔒";
        status.innerText = "Bloqueada";
        status.style.color = "#facc15";

        // 🔄 VOLTA COR PADRÃO
        peca.style.background = "rgba(15, 23, 42, 0.85)";
    });

    broto = 0;
    foguete = 0;

    atualizarContador();
}

// -------- SISTEMA PRINCIPAL --------
pecas.forEach(function (peca) {

    peca.addEventListener("click", function () {

        const ativas = document.querySelectorAll(".card-info.ativa").length;
        const status = peca.querySelector("strong");
        const icone = peca.querySelector(".iconePeca");
        const texto = peca.querySelector("p");

        // 🚫 BLOQUEIA LIMITE
        if (!peca.classList.contains("ativa") && ativas >= LIMITE) {
            alert("Limite atingido!");
            return;
        }

        // 🚫 NÃO RECLICA SE JÁ ATIVA
        if (peca.classList.contains("ativa")) return;

        // ✅ ATIVAÇÃO PADRÃO
        peca.classList.add("ativa");
        peca.classList.remove("bloqueada");

        status.innerText = "Desbloqueado";
        status.style.color = "#2bbd1e";

        // 🟢 COR VERDE PADRÃO
        peca.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";

        // -------- COMPORTAMENTO POR ID --------
        switch (peca.id) {

            case "peca1":
                icone.innerText = "🛠️";
                texto.innerText = "Abrindo resumo básico...";
                window.open("pagina.html");
                break;

            case "peca2":
                icone.innerText = "🟢";
                texto.innerText = "Agora está verde!";
                break;

            case "peca3":
                icone.innerText = "🎨";
                texto.innerText = "Abrindo resumo avançado...";
                window.open("pagina2.html");
                break;

            case "peca4":
                if (foguete === 1) {
                    icone.innerText = "💥";
                    texto.innerText = "Explodiu!";
                } else {
                    icone.innerText = "🚀";
                    texto.innerText = "Clique novamente...";
                    foguete++;
                }
                break;

            case "peca5":
                broto++;
                if (broto >= 10) {
                    icone.innerText = "🌳";
                    texto.innerText = "Cresceu!";
                } else {
                    icone.innerText = "🌱";
                    texto.innerText = `Clique (${broto}/10)`;
                }
                break;

            case "peca6":
                icone.innerText = "✖️";
                texto.innerText = "Peça secreta ativada!";
                break;
        }

        atualizarContador();
    });

});