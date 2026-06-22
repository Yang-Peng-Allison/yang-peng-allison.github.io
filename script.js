const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// --- Theme ---------------------------------------------------------------
// The initial theme is resolved by the inline head script (no-flash). Here we
// just keep the toggle's accessible state in sync and persist user choice.
function syncThemeToggle() {
  if (!themeToggle) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

syncThemeToggle();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (e) {}
    syncThemeToggle();
  });
}

// --- Mobile navigation ---------------------------------------------------
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

// --- Analytics events ----------------------------------------------------
// Page views are handled by the GA4 tag. Track PDF-open intent separately
// because GitHub Pages cannot tell whether an opened PDF was later downloaded.
document.querySelectorAll('a[href$=".pdf"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag !== "function") return;
    const documentName = link.getAttribute("href").split("/").pop();
    window.gtag("event", link.dataset.analyticsEvent || "document_open", {
      document_name: documentName,
      document_url: link.href
    });
  });
});

// --- Scroll reveal -------------------------------------------------------
// Progressive enhancement: elements start hidden only when JS + motion are
// available. If reduced motion is requested, reveal everything immediately.
const reveals = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const hashTarget = window.location.hash
  ? document.querySelector(window.location.hash)
  : null;

if (hashTarget && hashTarget.classList.contains("reveal")) {
  hashTarget.classList.add("is-visible");
}

if (reveals.length && "IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
