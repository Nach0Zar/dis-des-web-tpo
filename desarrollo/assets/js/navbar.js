/* navbar.js — Comportamiento compartido del navbar en todas las páginas.
   El toggle del menú mobile lo maneja Bootstrap (data-bs-toggle="collapse").
   Acá solo agregamos una mejora compartida: cerrar el menú colapsado al
   navegar a un link, para que no quede abierto tras hacer click en mobile. */
document.querySelectorAll(".navbar-collapse").forEach((menu) => {
  menu.querySelectorAll(".nav-link, .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = window.bootstrap?.Collapse.getInstance(menu);
      if (collapse && menu.classList.contains("show")) {
        collapse.hide();
      }
    });
  });
});
