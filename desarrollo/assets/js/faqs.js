const filterButtons = document.querySelectorAll("[data-faq-filter]");
const faqItems = document.querySelectorAll("[data-faq-category]");

function applyCategory(category) {
  faqItems.forEach((item) => {
    const categories = (item.getAttribute("data-faq-category") || "").split(" ");
    const visible = category === "todas" || categories.includes(category);
    item.classList.toggle("d-none", !visible);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.faqFilter;
    filterButtons.forEach((other) => {
      const on = other.dataset.faqFilter === category;
      other.classList.toggle("btn-primary", on);
      other.classList.toggle("btn-outline-primary", !on);
      other.setAttribute("aria-pressed", String(on));
    });
    applyCategory(category);
  });
});
