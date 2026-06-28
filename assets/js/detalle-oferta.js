const applyButtons = document.querySelectorAll("[data-offer-apply-action]");
const confirmModalEl = document.querySelector("#confirmPostulationModal");
const successModalEl = document.querySelector("#postulationSuccessModal");
const confirmApplyButton = document.querySelector("[data-offer-confirm-apply]");

const confirmModal = confirmModalEl ? new bootstrap.Modal(confirmModalEl) : null;
const successModal = successModalEl ? new bootstrap.Modal(successModalEl) : null;

applyButtons.forEach((btn) => {
  btn.addEventListener("click", () => confirmModal?.show());
});

confirmApplyButton?.addEventListener("click", () => {
  confirmModalEl?.addEventListener(
    "hidden.bs.modal",
    () => successModal?.show(),
    { once: true }
  );
  confirmModal?.hide();

  applyButtons.forEach((btn) => {
    btn.disabled = true;
    btn.innerHTML = '<i class="bi bi-check-lg me-1" aria-hidden="true"></i>¡Postulación enviada!';
  });
});
