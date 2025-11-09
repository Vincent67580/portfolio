document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname;

  // Détermine la profondeur du fichier
  let depth = 0;
  if (path.includes("/pages/stages/")) depth = 2;
  else if (path.includes("/pages/")) depth = 1;

  // Trouve le bon chemin vers nav.html
  const navPath =
    depth === 2 ? "../../nav.html" :
    depth === 1 ? "../nav.html" :
    "nav.html";

  fetch(navPath)
    .then(response => response.text())
    .then(data => {
      const navbarContainer = document.createElement("div");
      navbarContainer.innerHTML = data;
      document.body.prepend(navbarContainer);

      // Corrige les liens selon la profondeur
      document.querySelectorAll(".navbar a").forEach(link => {
        let href = link.getAttribute("href");
        if (!href || href.startsWith("http")) return;

        if (depth === 1 && !href.startsWith("../")) href = "../" + href;
        else if (depth === 2 && !href.startsWith("../../")) href = "../../" + href;

        // Corrige pour GitHub Pages
        if (location.hostname.includes("github.io")) {
          href = "/portfolio/" + href.replace(/^(\.\.\/)+/, "");
        }

        link.setAttribute("href", href);

        // ✅ Ajoute la classe "active" si le href correspond à la page actuelle
        const current = path.split("/").pop(); // ex: "about.html"
        const linkFile = href.split("/").pop();
        if (current === linkFile) {
          link.classList.add("active");
        }
      });

      // Menu burger
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");
      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          menuToggle.classList.toggle("open");
          navLinks.classList.toggle("open");
        });
        navLinks.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
            menuToggle.classList.remove("open");
            navLinks.classList.remove("open");
          });
        });
      }
    })
    .catch(err => console.error("Erreur de chargement de la nav :", err));
});
