// Inicializamos el índice de la imagen actual
let index = 0;

// Seleccionamos el contenedor de imágenes
const images = document.querySelector('.carousel-images');

// Evento para avanzar con el botón "Siguiente"
document.querySelector('.next-btn').addEventListener('click', () => {
  index = (index + 1) % 15; // Avanza en el índice de imágenes
  images.style.transform = `translateX(-${index * 100}%)`;
});

// Evento para retroceder con el botón "Anterior"
document.querySelector('.prev-btn').addEventListener('click', () => {
  index = (index - 1 + 15) % 15; // Retrocede en el índice de imágenes
  images.style.transform = `translateX(-${index * 100}%)`;
});

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2