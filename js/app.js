function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if(confirm("Você tem certeza que deseja devolver este jogo?")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        }

    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
    // Chama a função para contar os jogos alugados e exibir no console
    contarJogosAlugados();
}
function contarJogosAlugados() {
    // Seleciona todos os elementos com a classe que indica jogo alugado
    let jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    
    // Exibe no console a quantidade de jogos alugados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

//function alterarStatus(gameId) {
    // Seleciona o botão com base no ID do jogo
    //const button = document.querySelector(`#game-${gameId} .dashboard__item__button`);

    // Verifica o texto atual do botão e alterna entre "Alugar" e "Devolver"
    //if (button.innerText === "Alugar") {
        //if(confirm("Você tem certeza que deseja devolver este jogo?")) {
        //button.innerText = "Devolver";
        //button.classList.add("dashboard__item__button--return"); // Adiciona a classe de devolução
        //imagem.classList.contains("dashboard__item__img--rented") 
        //imagem.classList.remove("dashboard__item__img--rented");
        //}
    //} else {
        //button.innerText = "Alugar";
        //button.classList.remove("dashboard__item__button--return"); // Remove a classe de devolução
        //imagem.classList.add("dashboard__item__img--rented");
    //}
// Chama a função para contar os jogos alugados e exibir no console
    //contarJogosAlugados();
//}

//function contarJogosAlugados() {
    // Seleciona todos os elementos com a classe que indica jogo alugado
    //let jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    
    // Exibe no console a quantidade de jogos alugados
    //console.log(`Total de jogos alugados: ${jogosAlugados}`);
//}