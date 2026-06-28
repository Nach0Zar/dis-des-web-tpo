/* busqueda-filtros.js — Página de búsqueda de ofertas.
   - Filtros tipo "pill" (modalidad, área, nivel, chips rápidos) togglables on/off.
   - "Limpiar" desactiva TODOS los filtros sin excepción.
   - Buscador de texto que filtra las cards de ofertas en el cliente. */

/* ----------------------------- Filtros (pills) ---------------------------- */
const pills = document.querySelectorAll("[data-filter-pill]");

function setPill(btn, active) {
  btn.classList.toggle("btn-primary", active);
  btn.classList.toggle("btn-outline-primary", !active);
  btn.setAttribute("aria-pressed", String(active));
}

pills.forEach((btn) => {
  // Sincroniza aria-pressed con el estado visual inicial.
  setPill(btn, btn.classList.contains("btn-primary"));
  btn.addEventListener("click", () => {
    setPill(btn, !btn.classList.contains("btn-primary"));
  });
});

document.querySelectorAll("[data-filter-clear]").forEach((btn) => {
  btn.addEventListener("click", () => {
    pills.forEach((pill) => setPill(pill, false));
  });
});

/* --------------------------- Buscador de ofertas -------------------------- */
const searchForm = document.querySelector("[data-job-search-form]");
const searchInput = document.querySelector("[data-job-search-input]");
const jobCards = document.querySelectorAll("[data-job-card]");
const emptyAlert = document.querySelector("[data-job-empty]");

function applySearch() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visible = 0;

  jobCards.forEach((card) => {
    const match = card.textContent.toLowerCase().includes(query);
    card.classList.toggle("d-none", !match);
    if (match) visible += 1;
  });

  emptyAlert?.classList.toggle("d-none", visible !== 0);
}

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  applySearch();
});
searchInput?.addEventListener("input", applySearch);
