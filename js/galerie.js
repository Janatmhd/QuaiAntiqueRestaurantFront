const galerieImage = document.getElementById("allImages");

//Récupérer les informations des images
let monImage = getImage("titre", "../ImageQA/mediterranean-cuisine-2378758_1280.jpg");

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    return `<div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}

/*function sanitizeHtml(text){
    // Créez un élément HTML temporaire de type "div"
    const tempHtml = document.createElement('div');
    
    // Affectez le texte reçu en tant que contenu texte de l'élément "tempHtml"
    tempHtml.textContent = text;
    
    // Utilisez .innerHTML pour récupérer le contenu de "tempHtml"
    // Cela va "neutraliser" ou "échapper" tout code HTML potentiellement malveillant
    return tempHtml.innerHTML;
}