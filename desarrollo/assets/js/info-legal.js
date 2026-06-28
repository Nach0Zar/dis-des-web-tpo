const legalLinks = document.querySelectorAll("#legalNavContent a[href^='#']");
const legalSections = document.querySelectorAll(".legal-section");

function activateSection(id) {
  legalSections.forEach((section) => {
    section.classList.toggle("is-active", section.id === id);
  });
  legalLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

legalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    activateSection(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
