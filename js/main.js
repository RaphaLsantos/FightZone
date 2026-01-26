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
    const maxIndex = Math.max(0, cards.length - cardsPerView);

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



/* Função para enviar mensagem de contato */
function enviarMsg(event) {
    event.preventDefault();
    
    const form = document.querySelector('.contact-form');
    const nome = form.querySelector('input[name="nome"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();
    
    // Validação
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    const loadingDiv = document.querySelector('.carregandoMsgContact');
    
    // Mostra a div de carregamento
    loadingDiv.classList.add('ativo');
    loadingDiv.classList.remove('sucesso');
    
    // Após 3 segundos, mostra a mensagem de sucesso
    setTimeout(() => {
        loadingDiv.classList.add('sucesso');
    }, 3000);
    
    // Esconde após 5 segundos (3 segundos de carregamento + 2 segundos de sucesso)
    setTimeout(() => {
        loadingDiv.classList.remove('ativo');
        loadingDiv.classList.remove('sucesso');
        form.reset();
    }, 5000);
}

/* Função para mostrar aviso de ofertas */
function mostrarAvisoOfertas(event) {
    event.preventDefault();
    
    const avisoDiv = document.querySelector('.avisoOfertas');
    
    // Mostra o aviso
    avisoDiv.classList.add('ativo');
    
    // Esconde após 3 segundos
    setTimeout(() => {
        avisoDiv.classList.remove('ativo');
    }, 3000);
}




