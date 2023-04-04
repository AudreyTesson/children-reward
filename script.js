function piocherCarte() {
  const paquet = [
    {nom: "Activité physique", image: "activite"},
    {nom: "Argent de poche", image: "argent"},
    {nom: "Cuisiner un repas", image: "cuisiner"},
    {nom: "Dessiner ou peindre", image: "dessin"},
    {nom: "Faire du sport", image: "gym"},
    {nom: "Lire un livre", image: "livre en plus"},
    {nom: "Utiliser l'ordinateur", image: "ordinateur"},
    {nom: "Manger devant la télé", image: "repas tele"},
    {nom: "Manger un repas spécial", image: "repas special"},
    {nom: "Manger des sucreries", image: "sucreries"},
    {nom: "Regarder la télé", image: "tele"},
    {nom: "Utiliser le téléphone", image: "telephone"},
    {nom: "Trouver un trésor", image: "tresor"},
    {nom: "Faire du vélo", image: "velo"},
    {nom: "Regarder des vidéos sur Youtube", image: "youtube"}
  ];

  let carte = paquet[Math.floor(Math.random() * paquet.length)];
  let cheminImage = "images/" + carte.image + ".png";

  document.getElementById("carte-nom-majuscules").innerHTML = carte.nom.toUpperCase();
  document.getElementById("carte-nom-minuscules").innerHTML = carte.nom.toLowerCase();
  document.getElementById("carte-image").src = cheminImage;
}
