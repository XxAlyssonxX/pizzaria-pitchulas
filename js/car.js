let currentPosition = 0;
const visibleItems = 4; // Exibir 4 pizzas por vez
const container = document.querySelector('.produtos-container');
const totalItems = container.children.length;
const itemWidth = container.children[0].offsetWidth; // Largura de cada card

function updateCarousel() {
    const offset = -(currentPosition * itemWidth); // Calcula o deslocamento horizontal
    container.style.transform = `translateX(${offset}px)`; // Aplica o deslocamento em pixels
}

function moveLeft() {
    const container = document.querySelector('.produtos-container');
    container.scrollBy({
        left: -300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveRight() {
    const container = document.querySelector('.produtos-container');
    container.scrollBy({
        left: 300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveLeft2() {
    const container = document.querySelector('.produtos-container2');
    container.scrollBy({
        left: -300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveRight2() {
    const container = document.querySelector('.produtos-container2');
    container.scrollBy({
        left: 300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveLeft3() {
    const container = document.querySelector('.produtos-container3');
    container.scrollBy({
        left: -300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveRight3() {
    const container = document.querySelector('.produtos-container3');
    container.scrollBy({
        left: 300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveLeft4() {
    const container = document.querySelector('.produtos-container4');
    container.scrollBy({
        left: -300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

function moveRight4() {
    const container = document.querySelector('.produtos-container4');
    container.scrollBy({
        left: 300, // Ajuste o valor para rolar mais ou menos
        behavior: 'smooth'
    });
}

