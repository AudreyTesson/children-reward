function piocherCarte() {
  const paquet = [
    "ACTIVITE",
    "ARGENT",
    "CUISINER",
    "DESSIN",
    "GYM",
    "LIVRE EN PLUS",
    "ORDINATEUR",
    "REPAS TV",
    "REPAS SPECIAL",
    "SUCRERIES",
    "TELE",
    "TELEPHONE",
    "TRESOR",
    "VELO",
    "YOUTUBE",
  ];

  let carte = paquet[Math.floor(Math.random() * paquet.length)];
  let cheminImage = "images/" + carte + ".png";

  document.getElementById("carte-nom").innerHTML = carte;
  document.getElementById("carte-image").src = cheminImage;
}
