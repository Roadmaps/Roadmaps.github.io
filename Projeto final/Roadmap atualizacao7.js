// Selecionando os elementos do DOM necessários
const areaCentral = document.querySelector('.area-central'); // Área central da página
const todosAsides = document.querySelectorAll('.informacoes'); // Todos os elementos 'aside' que podem ser abertos
const marcos = document.querySelectorAll('.marco'); // Elementos 'marco' que, quando clicados, abrem/fecham o aside correspondente

// Função para fechar todos os asides
function fecharTodosAsides() {
  todosAsides.forEach(aside => {
    aside.classList.remove('aberto'); // Remove a classe 'aberto' para fechar o aside
  });
}

// Evento para fechar todos os asides quando a área central é clicada
areaCentral.addEventListener('click', function() {
  fecharTodosAsides();
});

// Evento para cada elemento 'marco'
marcos.forEach((marco, index) => {
  marco.addEventListener('click', function(event) {
    event.stopPropagation(); // Impede a propagação do evento para os elementos pais

    const asideAtual = todosAsides[index];
    const estaAberto = asideAtual.classList.contains('aberto'); // Verifica se o aside está aberto

    fecharTodosAsides(); // Fecha todos os asides

    // Se o aside correspondente não estiver aberto, abre-o; caso contrário, fecha-o
    if (!estaAberto) {
      asideAtual.classList.add('aberto'); // Adiciona a classe 'aberto' para abrir o aside
    }
  });
});

// Evento para fechar todos os asides quando clicar fora da área central
document.addEventListener('click', function(event) {
  if (!areaCentral.contains(event.target)) {
    fecharTodosAsides();
  }
});
