function horloge() {
    let heure = new Date(); // Récupère l'heure actuelle
    let h = heure.getHours(); // Récupère l'heure
    let m = heure.getMinutes(); // Récupère les minutes
    let s = heure.getSeconds(); // Récupère les secondes
    h = (h < 10) ? "0" + h : h; // Ajoute un zéro devant les heures < 10
    m = (m < 10) ? "0" + m : m; // Ajoute un zéro devant les minutes < 10
    s = (s < 10) ? "0" + s : s; // Ajoute un zéro devant les secondes < 10
    let heure_fr = h + ":" + m + ":" + s; // Formatage de l'heure en "hh:mm:ss"
    document.getElementById("horloge").innerHTML = heure_fr; // Affichage de l'heure dans un élément HTML
  }
  
  setInterval(horloge, 1000); // Met à jour l'horloge toutes les sec