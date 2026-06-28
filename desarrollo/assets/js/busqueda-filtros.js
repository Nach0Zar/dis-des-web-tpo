const FILTER_GROUPS = ["modalidad", "area", "nivel"];
const active = { modalidad: new Set(), area: new Set(), nivel: new Set() };

const allPills = document.querySelectorAll("[data-filter-pill]");
const dateSelects = document.querySelectorAll("[data-filter-date]");
const searchInput = document.querySelector("[data-job-search-input]");
const searchForm = document.querySelector("[data-job-search-form]");
const jobCards = document.querySelectorAll("[data-job-card]");
const emptyAlert = document.querySelector("[data-job-empty]");
const summary = document.querySelector("[data-job-results-summary]");

let maxDays = null;

function renderPills() {
  allPills.forEach((pill) => {
    const group = pill.dataset.filterGroup;
    const value = pill.dataset.filterValue;
    const on = Boolean(active[group]?.has(value));
    pill.classList.toggle("btn-primary", on);
    pill.classList.toggle("btn-outline-primary", !on);
    pill.setAttribute("aria-pressed", String(on));
  });
}

function matchesGroup(card, group) {
  return active[group].size === 0 || active[group].has(card.dataset[group]);
}

function applyFilters() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visible = 0;

  jobCards.forEach((card) => {
    const byGroups = FILTER_GROUPS.every((group) => matchesGroup(card, group));
    const byDate = maxDays === null || Number(card.dataset.dias) <= maxDays;
    const byText = card.textContent.toLowerCase().includes(query);
    const show = byGroups && byDate && byText;
    card.classList.toggle("d-none", !show);
    if (show) visible += 1;
  });

  emptyAlert?.classList.toggle("d-none", visible !== 0);
  if (summary) {
    summary.textContent =
      visible === jobCards.length
        ? "Resultados con información clave visible para decidir rápido."
        : `${visible} oferta${visible === 1 ? "" : "s"} según los filtros aplicados.`;
  }
}

allPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const group = pill.dataset.filterGroup;
    const value = pill.dataset.filterValue;
    if (!active[group]) return;
    if (active[group].has(value)) active[group].delete(value);
    else active[group].add(value);
    renderPills();
    applyFilters();
  });
});

dateSelects.forEach((select) => {
  select.addEventListener("change", () => {
    maxDays = select.value ? Number(select.value) : null;
    dateSelects.forEach((other) => {
      other.value = select.value;
    });
    applyFilters();
  });
});

document.querySelectorAll("[data-filter-clear]").forEach((btn) => {
  btn.addEventListener("click", () => {
    FILTER_GROUPS.forEach((group) => active[group].clear());
    maxDays = null;
    dateSelects.forEach((select) => {
      select.value = "";
    });
    renderPills();
    applyFilters();
  });
});

searchInput?.addEventListener("input", applyFilters);
searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
});

renderPills();
applyFilters();
