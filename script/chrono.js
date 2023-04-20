let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
// let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let tourBtn = document.getElementById("tour");
let tempsListe = document.getElementById("tempsListe");

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;
let temps = [];


const demarrer = () => {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  } else if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

// const arreter = () => {
//   if (!estArrete) {
//     estArrete = true;
//     clearTimeout(timeout);
//   }
// };

const defilerTemps = () => {
  if (estArrete) return;

  secondes = parseInt(secondes);
  minutes = parseInt(minutes);
  heures = parseInt(heures);

  secondes++;

  if (secondes == 60) {
    minutes++;
    secondes = 0;
  }

  if (minutes == 60) {
    heures++;
    minutes = 0;
  }

  //   affichage
  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (heures < 10) {
    heures = "0" + heures;
  }

  chrono.textContent = `${heures}:${minutes}:${secondes}`;

  timeout = setTimeout(defilerTemps, 1000);
};

const ajouterTour = () => {
    temps.push(`${heures}:${minutes}:${secondes}`);
    let li = document.createElement("li");
    li.textContent = `${temps.length}. ${temps[temps.length - 1]}`;
    tempsListe.appendChild(li);
  };

const reset = () => {
  chrono.textContent = "00:00:00";
  estArrete = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  temps = [];
  tempsListe.innerHTML = "";
  clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
// stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);
tourBtn.addEventListener("click", ajouterTour);