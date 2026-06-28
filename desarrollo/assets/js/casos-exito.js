/* casos-exito.js — Formulario "Postulá tu caso de éxito".
   Valida campos requeridos (borde + mensaje rojo en error, verde en éxito vía
   estilos de validación de Bootstrap) y muestra confirmación al enviar. */
const storyForm = document.querySelector("[data-story-form]");
const storySuccess = document.querySelector("[data-story-success]");

storyForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!storyForm.checkValidity()) {
    storyForm.classList.add("was-validated");
    storySuccess?.classList.add("d-none");
    // Lleva el foco al primer campo inválido para accesibilidad.
    storyForm.querySelector(":invalid")?.focus();
    return;
  }

  storyForm.classList.remove("was-validated");
  storyForm.reset();
  storySuccess?.classList.remove("d-none");
  storySuccess?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
