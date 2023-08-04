const dateNaissance = new Date("1978-03-05");

function calculerAge(dateNaissance) {
  let difference = Date.now() - dateNaissance.getTime();
  let ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Mettez à jour l'élément HTML avec l'âge calculé
document.getElementById("age").textContent = calculerAge(dateNaissance);

// Définissez vos chiffres initiaux
let chiffre1 = 22;
let chiffre2 = 5;

// Mettez à jour les éléments HTML avec les chiffres initiaux
document.getElementById("chiffre1").textContent = chiffre1;
document.getElementById("chiffre2").textContent = chiffre2;

// Calculez le temps jusqu'à la prochaine date d'anniversaire
let prochaineDateAnniversaire = new Date(dateNaissance);
prochaineDateAnniversaire.setFullYear(new Date().getFullYear() + 1);
let tempsRestant = prochaineDateAnniversaire - Date.now();

// Incrémentez les chiffres chaque année après la prochaine date d'anniversaire
setTimeout(function () {
  setInterval(function () {
    chiffre1++;
    chiffre2++;
    document.getElementById("chiffre1").textContent = chiffre1;
    document.getElementById("chiffre2").textContent = chiffre2;
  }, 1000 * 60 * 60 * 24 * 365);
}, tempsRestant);
