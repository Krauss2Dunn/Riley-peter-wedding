document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");

  if (nav) {
    const updateNav = () => {
      if (window.scrollY > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    updateNav();
    window.addEventListener("scroll", updateNav);
  }

  /* ================================
     SCROLL REVEAL
  ================================ */

  const revealElements = document.querySelectorAll(".reveal, .reveal-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});
