"use strict";
// Menu nav grace au burger

    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu-list');
    burger.addEventListener('click', () =>{
        const isActive = burger.classList.toggle('active');
        menu.classList.toggle('active');
        burger.setAttribute('aria-expanded', isActive);//Mettre à jour l'attribut pour les lecteurs 
    });

//Effet machine à écrire
const text = document.querySelector(".bvn");
const messages = ["Boujou !", "Welcome !", "Bienvenue !"];
let messageActuelIndex = 0;
let indiceCaractere = 0; //Écriture lettre par lettre
const vitesseEcriture = 100; //Vitesse d'écriture (en ms)
const dureeEntreMots = 2000; //Durée avant le prochain message (en ms)

//Fonction pour écrire un message lettre par lettre
const effetMachineAEcrire = () => {
  const messageActuel = messages[messageActuelIndex];

  if (indiceCaractere < messageActuel.length) {
    text.textContent += messageActuel.charAt(indiceCaractere);
    indiceCaractere++;
    setTimeout(effetMachineAEcrire, vitesseEcriture); //Continuer d'écrire lettre par lettre
  } else {
    //Mot terminé, attendre pour effacer
    setTimeout(() => {
      effacerEcriture();
    }, dureeEntreMots);
  }
};

// Effacement du message lettre par lettre
const effacerEcriture = () => {
  if (indiceCaractere > 0) {
    text.textContent = text.textContent.slice(0, indiceCaractere - 1);
    indiceCaractere--;
    setTimeout(effacerEcriture, vitesseEcriture); // Continue d'effacer lettre par lettre
  } else {
    // Une fois effacé, passer au message suivant
    messageActuelIndex = (messageActuelIndex + 1) % messages.length; // Passer au message suivant
    effetMachineAEcrire(); // Redémarrer l'écriture
  }
};




// Bascule Mode (clair/sombre)
const toggleButton = document.querySelector("#toggle-theme");
const linkedinIcon = document.querySelector("#linkedin-icon");
const githubIcon = document.querySelector("#github-icon");
const githubSkill = document.querySelector("#logo-github")

// Fonction pour changer les icônes selon le thème
function updateIcons(theme) {
    if (theme === "dark") {
        linkedinIcon.src = "/src/img/logo-linkedin-blanc.svg";
        githubIcon.src = "/src/img/logo-github-blanc.svg";
        githubSkill.src = "/src/img/logo-github-blanc.svg";
    } else {
        linkedinIcon.src = "/src/img/logo-linkedin.svg";
        githubIcon.src = "/src/img/logo-github.svg";
        githubSkill.src = "/src/img/logo-github.svg";
    }
}

// Fonction pour mettre à jour le thème et le bouton
function updateTheme(theme) {
    document.body.setAttribute("data-theme", theme);

    // Mise à jour du texte du bouton
    if (theme === "dark") {
        toggleButton.textContent = "🌕";
    } else {
    toggleButton.textContent = "☀️";
    }

    // Mise à jour des icônes
    updateIcons(theme);

    // Sauvegarde du choix dans localStorage
    localStorage.setItem("theme", theme);
}

// Récupérer le thème sauvegardé dans localStorage
const savedTheme = localStorage.getItem("theme") || "light";

// Appliquer le thème sauvegardé au chargement de la page
updateTheme(savedTheme);

// Ajouter un événement au bouton pour basculer le thème
toggleButton.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    let newTheme;

    if (currentTheme === "dark") {
        newTheme = "light";
    } else {
        newTheme = "dark";
    }

    // Appliquer le nouveau thème
    updateTheme(newTheme);
});
