const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let index = 0;
const totalItems = items.length;

function showNextSlide() {
    index++;
    if (index >= totalItems) {
        index = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Redirecionar para cardapio.html
function redirect() {
    window.location.href = 'src/cardapio.html';
}

// Automatic slide every 3 seconds
setInterval(showNextSlide, 3000);
