//capturar os elementos por ID

//peça 1
const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

//peça 2
const botaoAtivar2 = document.getElementById("btnAtivar2");
const peca2 = document.getElementById("peca2");
const statusTexto2 = document.getElementById("statusTexto2");
const iconePeca2 = document.getElementById("iconePeca2");
const tituloPeca2 = document.getElementById("tituloPeca2");
const textoPeca2 = document.getElementById("textoPeca2");

//Estado da aplicação

let pecaAtivada = false;
let pecaAtivada2 = false;

//Evento de clique

//vamos adicionar evento de clique na peça 1

botaoAtivar.addEventListener("click", function(){
    // Verificar se a peça 1 foi clicada
    if(pecaAtivada === false){
        //remoção de clique "bloqueado"
        peca.classList.remove("bloqueada");

        //Adicionar classe ativa 
        peca.classList.add("ativa");

        //Mudança de texto
        statusTexto.innerText = "Ativado";

        //Alterar cor do texto
        statusTexto.style.color = "#22c55e";

        //Altera icone da peça
        iconePeca.innerText = "";

        //Alterar titulo da peça
        tituloPeca.innerText = "Peça Ativada"

        //Alterar descrição da peça
        textoPeca.innerText = "Parabéns! Você ativou a primeira peça";

        //Alterar texto do botão
        botaoAtivar.innerText = "Peca Ativada";
        
        //Desativar o botão após clique
        botaoAtivar.disabled = true;

        //Atualizar var de controle
        pecaAtivada = true;
    }
})

//Fazer a peça 1 ativada ser clicavel
peca.addEventListener("click", function(){
    //Verificando se a peça 1 já foi clicada anteriomente
    if(pecaAtivada === true){
        //Abrindo uma pagina que fala sobre JavaScript e DOM
        window.open(URL = "pagina.html");
    }
})

botaoAtivar2.addEventListener("click", function(){
    // Verificar se a peça 1 foi clicada
    if(pecaAtivada2 === false){
        //remoção de clique "bloqueado"
        peca2.classList.remove("bloqueada");

        //Adicionar classe ativa 
        peca2.classList.add("ativa");

        //Trocar a cor da peça 2
        peca2.style.background = "#c52222"

        //Mudança de texto
        statusTexto2.innerText = "Ativado";

        //Alterar cor do texto
        statusTexto2.style.color = "#22c55e";

        //Altera icone da peça
        iconePeca2.innerText = "🔴";

        //alterar cor do 

        //Alterar titulo da peça
        tituloPeca2.innerText = "Peça 2 Ativada"

        //Alterar descrição da peça
        textoPeca2.innerText = "Parabéns! Você ativou a segunda peça";

        //Alterar texto do botão
        botaoAtivar2.innerText = "Peca 2 Ativada";
        
        //Desativar o botão após clique
        botaoAtivar2.disabled = true;

        //Atualizar var de controle
        pecaAtivada2 = true;
    }
})

peca2.addEventListener("click", function () {
    let ativo = peca2.classList.toggle("ativa");

    if (ativo === false) {
        ativo = ("ativo");
        peca2.style.background = "#00c046";
        iconePeca2.innerText = "🟢";
    } else {
        ativo =("desativa");
        peca2.style.background = "#c52222";
        iconePeca2.innerText = "🔴";
    }
});
