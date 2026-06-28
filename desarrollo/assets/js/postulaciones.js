const searchInput = document.querySelector("[data-applications-search]");
const statusButtons = document.querySelectorAll("[data-status-filter]");
const emptyAlert = document.querySelector("[data-applications-empty]");

let currentStatus = "all";

function getItems() {
  return document.querySelectorAll("[data-application-id]");
}

function applyFilters() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  const visibleIds = new Set();

  getItems().forEach((item) => {
    const matchesStatus =
      currentStatus === "all" ||
      item.getAttribute("data-application-state") === currentStatus;
    const matchesText = item.textContent.toLowerCase().includes(query);
    const visible = matchesStatus && matchesText;
    item.classList.toggle("d-none", !visible);
    if (visible) visibleIds.add(item.getAttribute("data-application-id"));
  });

  emptyAlert?.classList.toggle("d-none", visibleIds.size !== 0);
}

statusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    statusButtons.forEach((other) => {
      const on = other === btn;
      other.classList.toggle(other.dataset.activeClass, on);
      other.classList.toggle(other.dataset.inactiveClass, !on);
      other.setAttribute("aria-pressed", String(on));
    });
    currentStatus = btn.dataset.statusFilter;
    applyFilters();
  });
});

searchInput?.addEventListener("input", applyFilters);
document
  .querySelector("[data-applications-search-form]")
  ?.addEventListener("submit", (event) => event.preventDefault());

const dismissModalEl = document.querySelector("#dismissApplicationModal");
const dismissModal = dismissModalEl ? new bootstrap.Modal(dismissModalEl) : null;
const confirmButton = document.querySelector("[data-application-confirm]");
let pendingId = null;

document.querySelectorAll("[data-application-dismiss]").forEach((btn) => {
  btn.addEventListener("click", () => {
    pendingId = btn.getAttribute("data-application-dismiss");
    dismissModal?.show();
  });
});

confirmButton?.addEventListener("click", () => {
  if (pendingId) {
    document
      .querySelectorAll(`[data-application-id="${pendingId}"]`)
      .forEach((item) => item.remove());
    pendingId = null;
    applyFilters();
  }
  dismissModal?.hide();
});
