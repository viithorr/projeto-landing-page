// =========================
// CARROSSEL DE DEPOIMENTOS
// - Estado inicial: Leonardo + Samantha
// - Ao avançar: troca Leonardo -> Bruna (Samantha permanece)
// - Após o primeiro avanço, as duas setas ficam sempre visíveis
// =========================

const Leonardo = document.getElementById("leonardo");
const Samantha = document.getElementById("samantha");
const Bruna    = document.getElementById("bruna");
const SetaEsq  = document.getElementById("seta-esquerda");
const SetaDir  = document.getElementById("seta-direita");

// Flag para lembrar que o usuário já avançou uma vez
let avancou = false;

// Utilitários de visibilidade (guiados pela classe .is-hidden no CSS)
function mostrar(el){ el.classList.remove("is-hidden"); }
function esconder(el){ el.classList.add("is-hidden"); }

// Possível reset do carrossel para o estado inicial
function estadoInicial(){
  mostrar(Leonardo);
  mostrar(Samantha);
  esconder(Bruna);
  esconder(SetaEsq);
  mostrar(SetaDir);
  avancou = false;
}

// Avançar: exibe Bruna no lugar de Leonardo (Samantha continua)
function RolarParaDireita() {
  esconder(Leonardo);
  mostrar(Bruna);

  // Depois do primeiro avanço, manter ambas as setas ativas
  avancou = true;
  mostrar(SetaEsq);
  mostrar(SetaDir);
}

// Voltar: traz Leonardo de volta e esconde Bruna
function RolarParaEsquerda() {
  mostrar(Leonardo);
  esconder(Bruna);

  // Se já houve avanço, ambas as setas permanecem visíveis
  if (avancou) {
    mostrar(SetaEsq);
    mostrar(SetaDir);
  } else {
    // Segurança para o estado inicial
    esconder(SetaEsq);
    mostrar(SetaDir);
  }
}
