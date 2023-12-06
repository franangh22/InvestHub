// JavaScript para manejar la apertura y cierre del modal
document.addEventListener("DOMContentLoaded", function () {
  const openModalButtons = document.querySelectorAll(".confirModalButton");
  const modal = document.getElementById("modal-component-confirm");

  // Función para abrir el modal
  function openModal() {
    modal.classList.remove("hidden");
  }

  // Función para cerrar el modal
  function closeModal() {
    modal.classList.add("hidden");
  }

  // Agrega eventos click a todos los botones con la clase 'openModalButton'
  openModalButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  // Agrega eventos click a los botones de cerrar modal dentro del modal
  const closeButtons = modal.querySelectorAll(
    '[data-modal-hide="popup-modal"]'
  );
  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
  });

  // Cierra el modal haciendo clic fuera del contenido del modal
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
