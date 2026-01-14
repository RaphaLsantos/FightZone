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