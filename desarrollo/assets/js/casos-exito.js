const storyForm = document.querySelector("[data-story-form]");
const storySuccess = document.querySelector("[data-story-success]");

storyForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!storyForm.checkValidity()) {
    storyForm.classList.add("was-validated");
    storySuccess?.classList.add("d-none");
    storyForm.querySelector(":invalid")?.focus();
    return;
  }

  storyForm.classList.remove("was-validated");
  storyForm.reset();
  storySuccess?.classList.remove("d-none");
  storySuccess?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
