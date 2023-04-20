let timer;
let timeLeft;

function startStop() {
  let button = document.querySelector("button");
  if (button.textContent === "Démarrer/Arrêter") {
    timeLeft = document.getElementById("time").value;
    if (timeLeft === "") {
      alert("Veuillez entrer un temps valide");
      return;
    }
    button.textContent = "Arrêter";
    timer = setInterval(countdown, 1000);
  } else {
    button.textContent = "Démarrer/Arrêter";
    clearInterval(timer);
  }
}

function countdown() {
  let countdownDiv = document.getElementById("countdown");
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
    alert("Temps écoulé !");
    document.getElementById("time").value = "";
    countdownDiv.textContent = "";
    document.querySelector("button").textContent = "Démarrer/Arrêter";
  } else {
    countdownDiv.textContent = "Temps restant: " + timeLeft + " secondes";
  }
}