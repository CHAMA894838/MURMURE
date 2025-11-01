document.getElementById("murmureForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const texte = document.getElementById("murmure").value.trim();
  const categorie = document.getElementById("categorie").value.trim();
  if (texte) {
    const murmures = JSON.parse(localStorage.getItem("murmures") || "[]");
    murmures.push({ texte, categorie });
    localStorage.setItem("murmures", JSON.stringify(murmures));
    document.getElementById("message").textContent = "Merci pour votre murmure. Il voyage maintenant dans le silence.";
    document.getElementById("murmureForm").reset();
  }
});