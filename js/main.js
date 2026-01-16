/*fechar e abrir menu*/
function abrirMenu() {
    const navbar = document.getElementById('navbar');
    const body = document.body;
    const menu = document.getElementById('navMenu');

    navbar.classList.add('menuAberto');
    body.classList.add('menuAberto');

    // Muda o ícone para X
    menu.innerHTML = '<i onclick="fecharMenu()" class="fa-solid fa-xmark"></i>';
}

function fecharMenu() {
    const navbar = document.getElementById('navbar');
    const body = document.body;
    const menu = document.getElementById('navMenu');

    navbar.classList.remove('menuAberto');
    body.classList.remove('menuAberto');

    // Muda o ícone de volta para hambúrguer
    menu.innerHTML = '<i onclick="abrirMenu()" class="fa-solid fa-bars"></i>';
}



/*inicio carousel*/
let currentIndex = 0;

function nextBtn() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.product-card');
    const viewport = document.querySelector('.carousel-viewport');

    const cardWidth = cards[0].offsetWidth + 32; // 32px = gap
    const viewportWidth = viewport.offsetWidth;

    const cardsPerView = Math.floor(viewportWidth / cardWidth);
    const maxIndex = cards.length - cardsPerView;

    if (currentIndex < maxIndex) {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}



function prevBtn() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.product-card');

    const cardWidth = cards[0].offsetWidth + 32;

    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}


/*final carousel*/