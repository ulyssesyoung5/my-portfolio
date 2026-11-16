const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

const updateActiveLink = () => {
  const current = [...sections].find((section) => {
    return window.scrollY >= section.offsetTop - 180 &&
      window.scrollY < section.offsetTop + section.offsetHeight - 180;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", current?.id === link.getAttribute("href")?.slice(1));
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();
