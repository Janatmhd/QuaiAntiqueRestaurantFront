const galerieImage = document.getElementById("allImages");

//Récuperer les informations des images

let titre = '<img src=x onerror="window.location.replace(\'htpps://google.com\')"';
let imgSource ="../ImageQA/mediterranean-cuisine-2378758_1280.jpg";
let monImage = getImage(titre, imgSource);



galerieImage.innerHTML = monImage;


function getImage(titre, urlImage){
    titre = sanitizeHTML(titre);
    urlImage = sanitizeHTML(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100">
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons">
                        <button type="button" class="btn btn-outline-light"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}