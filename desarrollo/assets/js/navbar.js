document.querySelectorAll(".navbar-collapse").forEach((menu) => {
  menu.querySelectorAll(".nav-link, .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = window.bootstrap?.Collapse.getInstance(menu);
      if (collapse && menu.classList.contains("show")) {
        collapse.hide();
      }
    });
  });
});
