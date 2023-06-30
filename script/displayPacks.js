// Liste des chemins d'accès des images
const cheminsImages = ['../../images/packs/100random.png', '../../images/packs/icon-87-90-100new.png', '../../images/packs/messi-tots.png', '../../images/packs/tots10chance.png'];

// Récupérer le conteneur où les images seront ajoutées
const container = document.getElementById('container-packs');

// Variable compteur pour générer des id uniques
let compteur = 1;

// Parcourir la liste des chemins d'accès des images
for (let i = 0; i < cheminsImages.length; i++) {
  // Créer un élément <img> pour chaque image
  const img = document.createElement('img');
  img.src = cheminsImages[i];
  img.alt = 'Description de l\'image ' + (i + 1);

  // Créer un bouton pour chaque image
  const button = document.createElement('button');
  button.innerText = 'Bouton ' + (i + 1);

  // Attribuer un id unique au bouton
  button.id = 'bouton-' + (i + 1);

  // Créer un conteneur pour l'image et le bouton
  const imageWrapper = document.createElement('div');
  imageWrapper.appendChild(img);
  imageWrapper.appendChild(button);

  // Ajouter le conteneur au conteneur principal
  container.appendChild(imageWrapper);

  // Ajouter un gestionnaire d'événements pour le clic du bouton
  button.addEventListener('click', boutonClique);
}

function boutonClique(event) {
  // Récupérer le bouton spécifique qui a été cliqué
  const bouton = event.target;

  // Récupérer l'id du bouton
  const id = bouton.id;

  // Vérifier si le bouton cliqué est le premier bouton
  if (id === 'bouton-1') {
    // Exécuter l'action spécifique pour le premier bouton
    console.log('Action spécifique pour le bouton 1');
  }
}