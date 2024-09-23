// Escuchar el clic en el enlace con la clase ".boton_acerca"
document.querySelector(".boton_acerca").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    document.querySelector(".acerca").classList.toggle("mostrar");
});

// Escuchar clics en el documento
document.addEventListener("click", function(event) {
    const acercaElement = document.querySelector(".acerca");
    const buttonElement = document.querySelector(".boton_acerca");

    // Verificar si el clic ocurrió fuera de la sección y el botón
    if (!acercaElement.contains(event.target) && !buttonElement.contains(event.target)) {
        acercaElement.classList.remove("mostrar"); // Cerrar la sección
    }
});
