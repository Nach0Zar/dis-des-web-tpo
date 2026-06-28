/* info-legal.js — Scrollspy del panel "Contenido": marca activo el link de la
   sección visible y hace scroll suave al hacer click en cada ancla. */
const legalNav = document.querySelector("#legalNavContent");

if (legalNav && window.bootstrap) {
  new bootstrap.ScrollSpy(document.body, {
    target: "#legalNavContent",
    smoothScroll: true,
  });
}
