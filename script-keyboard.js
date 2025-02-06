// Inicializamos el índice de la imagen actual
let index = 0;

// Seleccionamos el contenedor de imágenes
const images = document.querySelector('.carousel-images');

// Evento para detectar teclas
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    index = (index + 1) % 15; // Avanza en el índice de imágenes
  } else if (e.key === 'ArrowLeft') {
    index = (index - 1 + 15) % 15; // Retrocede en el índice de imágenes
  }
  images.style.transform = `translateX(-${index * 100}%)`;
});

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2