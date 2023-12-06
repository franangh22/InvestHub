document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
    const sidebar = document.getElementById('logo-sidebar');

    menuButton.addEventListener('click', function () {
        sidebar.classList.toggle('-translate-x-full');
    });

    // Agrega un listener para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuButton) {
            sidebar.classList.add('-translate-x-full');
        }
    });
});