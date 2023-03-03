function piocherCarte() {
  const paquet = [
    "activité",
    "argent",
    "cuisiner",
    "dessin",
    "gym",
    "livre en plus",
    "ordinateur",
    "repas télé",
    "repas spécial",
    "sucreries",
    "télé",
    "téléphone",
    "trésor",
    "vélo",
    "youtube",
  ];

  let carte = paquet[Math.floor(Math.random() * paquet.length)];
  let cheminImage = "images/" + carte + ".png";

  document.getElementById("carte-nom-majuscules").innerHTML = carte.toUpperCase();
  document.getElementById("carte-nom-minuscules").innerHTML = carte.toLowerCase();
  document.getElementById("carte-image").src = cheminImage;
}
