//capturar os elementos por ID

//peça 1
const statusTexto1 = document.getElementById("statusTexto1");
const peca1 = document.getElementById("peca1");
const textoPeca1 = document.getElementById("textoPeca1");
 
//peça 2
const statusTexto2 = document.getElementById("statusTexto2");

//Estado da aplicação
let pecaAtivada = false;
let pecaAtivada2 = false;

//Evento de clique

//vamos adicionar evento de clique na peça 1

peca1.addEventListener("click", function(){
    // Verificar se a peça 1 foi clicada
    if(pecaAtivada === false){
        //remoção de clique "bloqueado"
        peca1.classList.remove("bloqueada");

        //Adicionar classe ativa 
        peca1.classList.add("ativa");

        //Mudança de texto
        statusTexto1.innerText = "Desbloqueado";

        //Alterar cor do texto
        statusTexto1.style.color = "#22c55e";

        //Alterar texto
        textoPeca1.innerText = "parabéns você ativou a primeira peça, clique novamente para abrir o conteúdo de JavaScript e DOM.";

        //Atualizar var de controle
        pecaAtivada = true;
    }else{
        // Se já está ativada ela abre a página
        window.open(URL = "pagina.html");
    }
})


