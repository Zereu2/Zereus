// --- Lógica para el submenú del Catálogo ---

// 1. Seleccionamos los elementos que necesitamos del HTML
const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown.querySelector('.nav-link');

// 2. Creamos un evento para cuando se haga clic en el botón "Catálogo"
dropdownLink.addEventListener('click', function (event) {
  // Prevenimos que el enlace navegue a "#catalogo" inmediatamente
  event.preventDefault(); 
  
  // Añadimos o quitamos la clase 'active' del elemento padre con clase 'dropdown'
  dropdown.classList.toggle('active');
});

// 3. Opcional pero recomendado: Cerrar el submenú si se hace clic fuera de él
document.addEventListener('click', function (event) {
  // Si el clic NO fue dentro del área del dropdown...
  if (!dropdown.contains(event.target)) {
    // ...entonces quitamos la clase 'active' para que se cierre.
    dropdown.classList.remove('active');
  }
});

console.log("¡Bienvenida a Tu Tienda! El menú interactivo está listo.");

// --- Lógica para el desplazamiento suave al hacer clic en #catalogo ---
// Buscamos el enlace que apunta a la sección del catálogo
const catalogLink = document.querySelector('a[href="#catalogo"]');

catalogLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenimos el salto brusco
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth', // Hacemos el desplazamiento suave
            block: 'start'
        });
    }
});

