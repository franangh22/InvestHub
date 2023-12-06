// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el botón de volver arriba
    var botonVolverArriba = document.querySelector('.ir-arriba');

    // Agrega un evento de clic al botón
    botonVolverArriba.addEventListener('click', function (e) {
        e.preventDefault();

        // Desplaza suavemente hacia arriba usando el método scrollTo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Muestra u oculta el botón de volver arriba basado en la posición de desplazamiento
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            botonVolverArriba.style.display = 'block';
        } else {
            botonVolverArriba.style.display = 'none';
        }
    });
});