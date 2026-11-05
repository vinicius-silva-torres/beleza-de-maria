
const carrossel = document.querySelector('.carrossel-galeria');

const fotos = document.querySelectorAll('.card-carrossel');

let indice = 0;
let relogio = 0;


carrossel.addEventListener('scroll', () => {

    const meioDoCarrossel = carrossel.scrollLeft + (carrossel.clientWidth / 2);

    fotos.forEach((fotos, indice) => {

        const meioDaFoto = foto.offsetLeft + (foto.clientWidth / 2);
        const Distancia = Math.abs(meioDoCarrossel - meioDaFoto);

        if (Distancia < 100) {

            foto.classList.add('focada');
            indice
        }

        else {

            foto.classList.remove('focada')

        }

    })



})

fotos[0].classList.add('focada');


function iniciarGiro(){

relogio = setInterval(() => {
    indice++;

    if (indice >= fotos.length) {
        indice = 0;
    }

    carrossel.scrollTo({
        left: fotos[indice].offsetLeft,
        behavior: 'smooth'
    });

    fotos.forEach(foto => foto.classList.remove('focada'));

    fotos[indice].classList.add('focada');

}, 3000)
}

carrossel.addEventListener('touchstart', () => clearInterval(relogio));
carrossel.addEventListener('touchend', iniciarGiro);

fotos[0].classList.add('focada');
iniciarGiro();