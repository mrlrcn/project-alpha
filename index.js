var nav = document.getElementById('main-nav');
var boton = document.getElementById('btn-menu');
var menu = document.getElementById('navbar');
var icon = document.getElementById('icon');
boton.addEventListener('click', function() {
    nav.classList.toggle('mostrar');
    menu.classList.toggle('mostrar');
    icon.classList.toggle('mostrar');
});