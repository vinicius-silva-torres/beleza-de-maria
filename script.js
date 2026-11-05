
const carrossel = document.querySelector('.carrossel-galeria');

const fotos = document.querySelectorAll('.card-carrossel');

let indice = 0;
let relogio = 0;


function atualizarCarrossel() {
    const total = fotos.length;

    const esquerda = (indice - 1 + total) % total;
    const direita = (indice + 1) % total;

    fotos.forEach(foto => {
        foto.classList.remove('centro', 'esquerda', 'direita');
    });
    fotos[indice].classList.add('centro');
    fotos[esquerda].classList.add('esquerda');
    fotos[direita].classList.add('direita');
}

 relogio = setInterval(() => {
    indice = (indice + 1) % fotos.length;
    atualizarCarrossel();
}, 3000);

let toqueInicialX = 0;
carrossel.addEventListener('touchstart', (e) => {
    clearInterval(relogio); 
    toqueInicialX = e.touches[0].clientX;
}, { passive: true });

carrossel.addEventListener('touchend', (e) => {
    const toqueFinalX = e.changedTouches[0].clientX;
    if (toqueInicialX - toqueFinalX > 40) {
        indice = (indice + 1) % fotos.length; // Arrastou pra esquerda -> próxima
    } else if (toqueFinalX - toqueInicialX > 40) {
        indice = (indice - 1 + fotos.length) % fotos.length; // Arrastou pra direita -> volta
    }
    atualizarCarrossel();
    // Religa o giro automático
    relogio = setInterval(() => {
        indice = (indice + 1) % fotos.length;
        atualizarCarrossel();
    }, 3000);
});


atualizarCarrossel();