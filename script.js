document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("submit-btn");
  const fullName = document.getElementById("full-name");
  const phoneNumber = document.getElementById("number");
  const email = document.getElementById("email-input");
  const company = document.getElementById("company-input");
  const subject = document.getElementById("about-input");
  const question = document.getElementById("tell-more");
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));

  // Mobile menu
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    function closeMenu() {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
    }
    function openMenu() {
      mobileMenu.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
      document.body.style.overflow = "hidden";
    }
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll("[data-link]").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
});
