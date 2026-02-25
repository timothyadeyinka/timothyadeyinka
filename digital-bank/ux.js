/*****************************************
 * Written By Timothy Adeyinka
 * Email: timadeyinka.k@gmail.com
 * ***************************************
 * ux.js
 * initialize on 12/11/2025
 * completed on 13/11/2025
 *
 ***************************************/

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hamburger");
  const nav = document.getElementById("primary-navigation");
  const firstLink = nav?.querySelector(".nav-list a");

  if (!button || !nav) return;

  function openMenu() {
    nav.classList.add("open");
    nav.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    firstLink?.focus();

    // swap hamburger -> close icon if image data attributes are present
    const img = button.querySelector("img");
    if (img && img.dataset.close) {
      img.src = img.dataset.close;
      button.setAttribute("aria-label", "Close menu");
    }
  }

  function closeMenu(returnFocus = true) {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    // swap back to hamburger icon if data attribute present
    const img = button.querySelector("img");
    if (img && img.dataset.open) {
      img.src = img.dataset.open;
      button.setAttribute("aria-label", "Open menu");
    }
    // hide after transition completes
    setTimeout(() => {
      if (!nav.classList.contains("open")) nav.setAttribute("hidden", "");
    }, 300);
    if (returnFocus) button.focus();
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  // click outside to close
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (button.contains(e.target) || nav.contains(e.target)) return;
    closeMenu();
  });

  // close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) closeMenu();
  });

  // IMPORTANT
  // Ensure the nav isn't left hidden when the viewport is resized above mobile
  function updateNavForViewport() {
    const breakpoint = 599;
    if (window.innerWidth > breakpoint) {
      // on larger screens ensure nav is visible and mobile state cleared
      nav.removeAttribute("hidden");
      nav.classList.remove("open");
      button.setAttribute("aria=expanded", "false");
      document.body.classList.remove("no-scroll");
    } else {
      // on small screens, if menu is closed, ensure nav is hidden for assistive tech. The code is revert here below for better practices.
      if (!nav.classList.contains("open")) nav.setAttribute("hidden", "");
    }
  }

  // run once on load
  updateNavForViewport();

  // debounce resize handler to curb excessive calls
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateNavForViewport, 150);
  });
});
