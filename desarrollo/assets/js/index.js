/* index.js — Landing: formulario de contacto con confirmación por modal. */
const contactForm = document.querySelector("[data-contact-form]");
const contactModalEl = document.querySelector("#contactSentModal");
const contactModal = contactModalEl ? new bootstrap.Modal(contactModalEl) : null;

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  contactModal?.show();
});
