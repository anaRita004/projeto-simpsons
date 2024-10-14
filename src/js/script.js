const listaSelecaoPokedevs = document.querySelectorAll(".simpsons"); // Seleciona todos os elementos que têm a classe "simpsons"

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev(); // Esconde o cartão atualmente aberto

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev); // Mostra o cartão correspondente

        desativarPokedevNaListagem(); // Desativa o cartão ativo na listagem
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado); // Ativa o novo cartão na listagem
    });
});

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    if (pokedevSelecionadoNaListagem) {
        pokedevSelecionadoNaListagem.classList.add("ativo");
    }
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".cartao-simpsons.aberto"); // Encontra o cartão aberto
    if (pokedevAtivoNaListagem) {
        pokedevAtivoNaListagem.classList.remove("aberto"); // Remove a classe "aberto" para esconder o cartão
    }
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = "cartao-" + pokedev.id; // Cria o id do cartão correspondente
    const cartaoPokedevParaAbrir = document.getElementById(idPokedevSelecionado);
    
    if (cartaoPokedevParaAbrir) {
        cartaoPokedevParaAbrir.classList.add("aberto"); // Adiciona a classe "aberto" ao cartão correspondente
    }

    return idPokedevSelecionado; // Retorna o id para ativar na listagem
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".cartao-simpsons.aberto"); // Seleciona o cartão aberto
    if (cartaoPokedevAberto) {
        cartaoPokedevAberto.classList.remove("aberto"); // Remove a classe "aberto"
    }
}
