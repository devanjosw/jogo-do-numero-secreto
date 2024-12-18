let listaNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Função com parâmentros '(tag, texto)'
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1' , 'Jogo do Número Secreto');
  exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10:');

}

exibirMensagemInicial();

// Função sem parâmentros '()'
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto ) {
      exibirTextoNaTela('h1', 'Você acertou o número secreto!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let menssagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`
      exibirTextoNaTela('p', menssagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if ( chute > numeroSecreto) {
          exibirTextoNaTela ('p', 'O numero secreto é menor.');
        } else {
          exibirTextoNaTela ('p', 'O numero secreto é maior.');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSorteados= [];
    }
}

// Função com retorno 'return parseInt (Math.random() * 10 + 1);'
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
  if (listaNumeroSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  } else {
    listaNumeroSorteados.push(numeroEscolhido);
    console.log (listaNumeroSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Código omitido

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas =1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}
