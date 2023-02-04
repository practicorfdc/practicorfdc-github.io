const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".abrir-menu");
const closeMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu(){
    menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menulink => {
    menulink.addEventListener("click" , function() {
        menu.classList.remove("menu_abierto");
    })
})
