// script/footer.js

// script pour le footer 

document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname;

  // Détermine la profondeur du fichier
  let depth = 0;
  if (path.includes("/pages/stages/")) depth = 2;
  else if (path.includes("/pages/")) depth = 1;

  // Trouve le bon chemin vers nav.html
  const footerPath =
    depth === 2 ? "../../footer.html" :
    depth === 1 ? "../footer.html" :
    "footer.html";

    fetch(footerPath)
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.createElement("div");
      footerContainer.innerHTML = data;
      document.body.appendChild(footerContainer);

    })
    .catch(err => console.error("Erreur de chargement de la nav :", err));

});