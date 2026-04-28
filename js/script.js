//capturar os elementos por ID

const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

//Estado da aplicação

let pecaAtivada = false;

//Evento de clique

//vamos adicionar evento de clique

botaoAtivar.addEventListener("click", function(){
    // Verificar se a peça foi clicada
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

//Fazer a peça ativada ser clicavel
peca.addEventListener("click", function(){
    //Verificando se a peça já foi clicada anteriomente
    if(pecaAtivada === true){
        //Guiando a peça para a primeira aula de JavaScript
        peca.getAttribute = window.location.href = "https://professorederderosso.notion.site/JavaScript-Interatividade-3508374555cd80aa8d3bfd661401345a";
    }
})

