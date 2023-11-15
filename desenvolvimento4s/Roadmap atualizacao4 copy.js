const marcos = document.querySelectorAll('.marco');
const informacoes = document.querySelector('.informacoes');
const areaCentral = document.querySelector('.area-central');

marcos.forEach(marco => {
    marco.addEventListener('click', function() {
        informacoes.classList.toggle('aberto');
        areaCentral.classList.toggle('desfocada');
    });
});