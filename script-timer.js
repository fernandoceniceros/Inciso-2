// Inicializamos el índice de la imagen actual
let index = 0;

// Seleccionamos el contenedor de imágenes
const images = document.querySelector('.carousel-images');

// Función para cambiar a la siguiente imagen automáticamente
function nextImage() {
  index = (index + 1) % 15; // Avanza en el índice de imágenes
  images.style.transform = `translateX(-${index * 100}%)`; // Desplazamiento en el eje X
}

// Se ejecuta la función cada 30 segundos (30000 ms)
setInterval(nextImage, 30000);

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2