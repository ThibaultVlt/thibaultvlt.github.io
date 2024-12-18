"use strict";
// ------------MENU BURGER------------
// Menu nav grâce au burger
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu-list');
const menuLinks = document.querySelectorAll('#menu-list a'); // Sélectionner tous les liens du menu

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('active');
    menu.classList.toggle('active');
    burger.setAttribute('aria-expanded', isActive); // Mettre à jour l'attribut pour les lecteurs
});

    //Fermer le menu automatiquement au clic
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
          menu.classList.remove('active'); // Fermer le menu
          burger.classList.remove('active'); //Désactiver l'état du burger
          burger.setAttribute('aria-expanded', false);
      }
  });
});

//------------EFFET MACHINE À ÉCRIRE------------
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

//Effacer le message lettre par lettre
const effacerEcriture = () => {
  if (indiceCaractere > 0) {
    text.textContent = text.textContent.slice(0, indiceCaractere - 1);
    indiceCaractere--;
    setTimeout(effacerEcriture, vitesseEcriture); //Continue d'effacer lettre par lettre
  } else {
    //Une fois effacé, passer au message suivant
    messageActuelIndex = (messageActuelIndex + 1) % messages.length; //Passer au message suivant
    effetMachineAEcrire(); // Redémarrer l'écriture
  }
};

//------------LIgHT MODE / DARK MODE ------------
// Bascule Mode (clair/sombre)
const boutonTheme = document.querySelector("#toggle-theme");
const iconeLinkedin = document.querySelector("#linkedin-icon");
const iconGithub = document.querySelector("#github-icon");
const githubSkill = document.querySelector("#logo-github")

// Fonction pour changer les icônes selon le thème
function majDesIcones(theme) {
    if (theme === "dark") {
        iconeLinkedin.src = "/src/img/logo-linkedin-blanc.svg";
        iconGithub.src = "/src/img/logo-github-blanc.svg";
        githubSkill.src = "/src/img/logo-github-blanc.svg";
    } else {
        iconeLinkedin.src = "/src/img/logo-linkedin.svg";
        iconGithub.src = "/src/img/logo-github.svg";
        githubSkill.src = "/src/img/logo-github.svg";
    }
}

// Fonction pour mettre à jour le thème et le bouton
function majDuTheme(theme) {
    document.body.setAttribute("data-theme", theme);

    // Mise à jour du texte du bouton
    if (theme === "dark") {
        boutonTheme.textContent = "🌕";
    } else {
    boutonTheme.textContent = "☀️";
    }

    // Mise à jour des icônes
    majDesIcones(theme);

    // Sauvegarde du choix dans localStorage
    localStorage.setItem("theme", theme);
}

// Récupérer le thème sauvegardé dans localStorage
const sauvegardeDuTheme = localStorage.getItem("theme") || "light";

// Appliquer le thème sauvegardé au chargement de la page
majDuTheme(sauvegardeDuTheme);

// Ajouter un événement au bouton pour basculer le thème
boutonTheme.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    let nouveauTheme;

    if (currentTheme === "dark") {
        nouveauTheme = "light";
    } else {
        nouveauTheme = "dark";
    }

    // Appliquer le nouveau thème
    majDuTheme(nouveauTheme);
});

//Effet Fade-in
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const handleScroll = () => {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcule la position relative de l'élément dans la fenêtre (entre 0 et 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

      // Appliquer l'opacité et la transformation selon la position
      el.style.opacity = progress; // Opacité entre 0 (invisible) et 1 (visible)
      el.style.transform = `translateY(${(1 - progress) * 20}px)`; // Translation dynamique
    });
  };

  // Attacher l'événement de scroll
  window.addEventListener('scroll', handleScroll);

  // Appeler une fois pour initialiser
  handleScroll();
});
