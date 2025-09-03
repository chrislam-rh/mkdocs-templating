document.addEventListener("scroll", () => {
  const header = document.querySelector(".md-header");
  if (!header) return;

  if (window.scrollY > 8) {
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

