/* recuperar.js — Recuperar contraseña: confirmación por modal al enviar. */
const recoveryForm = document.querySelector("[data-recovery-form]");
const recoveryModalEl = document.querySelector("#recoverySentModal");
const recoveryModal = recoveryModalEl ? new bootstrap.Modal(recoveryModalEl) : null;

recoveryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!recoveryForm.checkValidity()) {
    recoveryForm.reportValidity();
    return;
  }
  recoveryModal?.show();
});
