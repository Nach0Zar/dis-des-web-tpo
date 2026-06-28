/* login.js — Toggle de visibilidad de contraseña y submit del login. */
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("[data-password-toggle]");
const loginForm = document.querySelector("[data-login-form]");

passwordToggle?.addEventListener("click", () => {
  const shouldShow = passwordInput.type === "password";
  passwordInput.type = shouldShow ? "text" : "password";
  passwordToggle.textContent = shouldShow ? "Ocultar" : "Mostrar";
  passwordToggle.setAttribute("aria-pressed", String(shouldShow));
  passwordToggle.setAttribute(
    "aria-label",
    shouldShow ? "Ocultar contraseña" : "Mostrar contraseña"
  );
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    return;
  }
  window.location.href = "empleos.html";
});
