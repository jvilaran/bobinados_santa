const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Actualiza las clases de los elementos
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active', 'next', 'prev');

    if (index === currentIndex) {
      item.classList.add('active');
    } else if (index === (currentIndex + 1) % carouselItems.length) {
      item.classList.add('next');
    } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
      item.classList.add('prev');
    }
  });
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

// Inicializar
updateCarousel();
