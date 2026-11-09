

const links = {
    whatsapp: "https://wa.me/5511943927040?text=Olá!%20Vi%20o%20site%20e%20quero%20receber%20meu%20desconto%20exclusivo." ,
    instagram: "https://instagram.com/seubordado" ,
    maps: "https://maps.google.com/"
};

document.querySelectorAll(".link-whatsapp").forEach(botao => {

botao.href = links.whatsapp;


})

document.querySelectorAll(".link-instagram").forEach(botao => {

     console.log("Encontrei o Instagram!");
botao.href = links.instagram;


})

document.querySelectorAll(".link-maps").forEach(botao => {

botao.href = links.maps;
})

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




const anoAtual = new Date().getFullYear();
const spanAno = document.getElementById('ano-atual');

if (spanAno) {
    spanAno.textContent = anoAtual;
}




const cardsDepo = document.querySelectorAll('.card-whats-carrossel');
const containerDepo = document.querySelector('.carrossel-depoimentos');
let indiceDepo = 0;
let inicioToqueDepo = 0;

function atualizarDepoimentos() {
    cardsDepo.forEach((card, i) => {
        card.classList.remove('centro', 'esquerda', 'direita');
        if (i === indiceDepo) {
            card.classList.add('centro');
        } else if (i === (indiceDepo - 1 + cardsDepo.length) % cardsDepo.length) {
            card.classList.add('esquerda');
        } else if (i === (indiceDepo + 1) % cardsDepo.length) {
            card.classList.add('direita');
        }
    });
}

if (cardsDepo.length > 0) {
    atualizarDepoimentos();

   
    cardsDepo.forEach((card, i) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('direita')) {
                indiceDepo = (indiceDepo + 1) % cardsDepo.length;
                atualizarDepoimentos();
            } else if (card.classList.contains('esquerda')) {
                indiceDepo = (indiceDepo - 1 + cardsDepo.length) % cardsDepo.length;
                atualizarDepoimentos();
            }
        });
    });

   
    containerDepo.addEventListener('touchstart', (e) => {
        inicioToqueDepo = e.touches[0].clientX;
    }, { passive: true });

    containerDepo.addEventListener('touchend', (e) => {
        let fimToqueDepo = e.changedTouches[0].clientX;
        if (inicioToqueDepo - fimToqueDepo > 40) {
            indiceDepo = (indiceDepo + 1) % cardsDepo.length; // Deslizou para a esquerda
            atualizarDepoimentos();
        } else if (fimToqueDepo - inicioToqueDepo > 40) {
            indiceDepo = (indiceDepo - 1 + cardsDepo.length) % cardsDepo.length; // Deslizou para a direita
            atualizarDepoimentos();
        }
    }, { passive: true });

    
    setInterval(() => {
        indiceDepo = (indiceDepo + 1) % cardsDepo.length;
        atualizarDepoimentos();
    }, 4500);
}