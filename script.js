document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const contentContainer = document.getElementById("content");
  
    // Función para cargar el contenido de la página parcial con efecto de transición
    function loadPage(page) {
      // Aplica efecto de fade out
      contentContainer.classList.add("out");
      setTimeout(() => {
        fetch(page)
          .then(response => response.text())
          .then(html => {
            contentContainer.innerHTML = html;
            // Quita la clase "out" para activar el fade in
            contentContainer.classList.remove("out");
          })
          .catch(err => {
            contentContainer.innerHTML = "<p>Error cargando la página.</p>";
            contentContainer.classList.remove("out");
          });
      }, 500); // 500ms corresponde a la duración de la transición de salida
    }
  
    // Asigna el evento click a cada enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const page = this.getAttribute("data-page");
        loadPage(page);
        // Actualiza el estado activo en la navegación
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Cargar por defecto la página "Inicio"
    loadPage("inicio.html");
  });
  