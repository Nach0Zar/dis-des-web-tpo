const uploadModalEl = document.querySelector("#uploadCvModal");
const uploadModal = uploadModalEl ? bootstrap.Modal.getOrCreateInstance(uploadModalEl) : null;
const confirmCvButton = document.querySelector("[data-cv-confirm]");
const cvTitleInput = document.querySelector("#cv-title");
const cvFilenameEl = document.querySelector("[data-cv-filename]");
const cvDateEl = document.querySelector("[data-cv-date]");
const cvToastEl = document.querySelector("#cvToast");
const cvToast = cvToastEl ? bootstrap.Toast.getOrCreateInstance(cvToastEl) : null;

function slugifyToFilename(title) {
  const base = (title || "CV").trim().replace(/[^\wáéíóúñ\s-]/gi, "").replace(/\s+/g, "_");
  return `${base || "CV"}.pdf`;
}

function todayLabel() {
  return new Date().toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

confirmCvButton?.addEventListener("click", () => {
  if (cvFilenameEl) cvFilenameEl.textContent = slugifyToFilename(cvTitleInput?.value);
  if (cvDateEl) cvDateEl.textContent = `Actualizado el ${todayLabel()}`;
  uploadModal?.hide();
  cvToast?.show();
});
