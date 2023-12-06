document.addEventListener("DOMContentLoaded", function () {
  const userMenuButton = document.querySelector(
    '[data-dropdown-toggle="dropdown-user"]'
  );
  const userMenu = document.getElementById("dropdown-user");

  userMenuButton.addEventListener("click", function () {
    userMenu.classList.toggle("hidden");
  });
});
