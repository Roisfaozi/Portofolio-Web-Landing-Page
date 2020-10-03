const navbar = document.querySelector('.navbar');
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.classList.add('color');
    } else {
        navbar.classList.remove('color');
    }
}

const toggle = document.querySelector('.menu-toggler');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');

});