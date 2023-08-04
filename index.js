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
// document
//   .querySelector(".image-profil-telephone")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     var target = document.querySelector("#right_aside");
//     var topOffset = window.pageYOffset || document.documentElement.scrollTop;
//     var targetOffsetTop = target.getBoundingClientRect().top + topOffset;
//     var startPosition = topOffset;
//     var distance = targetOffsetTop - startPosition;
//     var duration = 20000;
//     var start = null;

//     window.requestAnimationFrame(step);

//     function step(timestamp) {
//       if (!start) start = timestamp;
//       var progress = timestamp - start;
//       window.scrollTo(
//         0,
//         easeInOutCubic(progress, startPosition, distance, duration)
//       );
//       if (progress < duration) window.requestAnimationFrame(step);
//     }
//   });

// function easeInOutCubic(t, b, c, d) {
//   t /= d / 2;
//   if (t < 1) return (c / 2) * t * t * t + b;
//   t -= 2;
//   return (c / 2) * (t * t * t + 2) + b;
// }
