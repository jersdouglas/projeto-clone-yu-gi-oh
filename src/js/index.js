// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
//cartao da lista

//  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

//  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return
    //- passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado()
    //- passo 3 - fazer aparecer o próximo cartão da lista 
    cartaoAtual++
    mostrarCartao(cartaoAtual)

})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return

    esconderCartaoSelecionado()

    cartaoAtual--
    mostrarCartao(cartaoAtual)

})

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado')
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')
}
