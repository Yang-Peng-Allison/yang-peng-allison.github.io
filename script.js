const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("portfolio-theme");
if (storedTheme) {
  document.documentElement.dataset.theme = storedTheme;
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}
