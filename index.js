let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

document.querySelector('.image-profil-telephone').addEventListener('click', function(event) {
  event.preventDefault();  // Empêche le comportement de clic par défaut
  let targetElement = document.querySelector('#right_aside');  // Remplacez par l'ID de votre élément cible

  // Calcule la position Y de l'élément cible
  let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

  // Défile vers l'élément cible
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
