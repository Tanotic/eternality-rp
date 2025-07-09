
// Fonction pour le bouton retour en haut
document.addEventListener('DOMContentLoaded', function() {
  // Créer le bouton retour en haut
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  backToTopButton.title = 'Retour en haut';
  document.body.appendChild(backToTopButton);

  // Afficher/masquer le bouton selon le scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Fonction de retour en haut
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
