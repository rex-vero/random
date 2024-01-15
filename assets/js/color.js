const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const offcanvasBtn = document.getElementById('offcanvas-btn');
const offcanvasHeader = document.getElementById('offcanvas-header');
const offcanvasBody = document.getElementById('offcanvas-body');
const offcanvasText = document.getElementById('offcanvas-text');
const btn = document.getElementById('btn');
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.setAttribute('class', 'bg text-white');
    navbar.classList.remove('bg-2');
    navbar.classList.add('bg-3');
    prev.classList.add('text-2');
    next.classList.add('text-2');
    prev.classList.remove('text');
    next.classList.remove('text');
    offcanvasBtn.classList.add('offcanvas-btn2');
    offcanvasBtn.classList.remove('offcanvas-btn');
    offcanvasHeader.classList.remove('bg-2');
    offcanvasHeader.classList.add('bg-3');
    offcanvasBody.classList.add('bg');
    offcanvasText.classList.add('text-white');
    offcanvasText.classList.remove('text-black');
});
moon.addEventListener('click', () => {
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    body.setAttribute('class', 'bg-white');
    body.classList.add('trans');
    navbar.classList.add('bg-2');
    navbar.classList.remove('bg-3');
    prev.classList.add('text');
    next.classList.add('text');
    prev.classList.remove('text-2');
    next.classList.remove('text-2');
    offcanvasBtn.classList.remove('offcanvas-btn2');
    offcanvasBtn.classList.add('offcanvas-btn');
    offcanvasHeader.classList.add('bg-2');
    offcanvasHeader.classList.remove('bg-3');
    offcanvasBody.classList.remove('bg');
    offcanvasBody.classList.add('trans');
    offcanvasText.classList.remove('text-white');
    offcanvasText.classList.add('text-black');
});
btn.addEventListener('click', () => {
    const color = () => {
        let classes = ["red", "blue", "aqua", "blueviolet", "green", "yellowgreen", "pink"];
        let random = Math.floor(Math.random() * classes.length);
        return classes[random];
    };
    body.className = color();
});