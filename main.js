let buttonMenuBurger = document.getElementById("menuBurger");
const svgMenu = document.querySelectorAll("#menuBurger svg");
let menuMobile = document.getElementById("mobile-menu");

buttonMenuBurger.addEventListener('click', (e) => {
    for (let child of svgMenu) {
        child.classList.toggle("block");
        child.classList.toggle("hidden");
    }
    menuMobile.classList.toggle("hidden");
})

const linkMenuMobile = document.querySelectorAll("#mobile-menu div a");
for (let link of linkMenuMobile) {
    link.addEventListener('click', (e) => {
        for (let child of svgMenu) {
            child.classList.toggle("block");
            child.classList.toggle("hidden");
        }
        menuMobile.classList.toggle("hidden");
    })
}
let navLinks = document.getElementById("navLinks");
navLinks.addEventListener('click', (e) => {
    if (e.target.id != "navLinks") {
        for (let child of navLinks.children) {
            child.classList.remove("bg-gray-900");
        }
        e.target.classList.add("bg-gray-900");

    }
})

let btnUp = document.getElementById("btn-up");

btnUp.addEventListener('click', function srolll() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    for (let child of navLinks.children) {
        child.classList.remove("bg-gray-900");
    }
});

