"use strict";
// Menu nav grace au burger

    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu-list');
    burger.addEventListener('click', () =>{
        const isActive = burger.classList.toggle('active');
        menu.classList.toggle('active');
        burger.setAttribute('aria-expanded', isActive);//Mettre à jour l'attribut pour les lecteurs 
    });

    // Effet machine à écrire

// const text = document.querySelector(".bvn");
// const messages = ["Boujou !", "Welcome !", "Bienvenue !"];
// let currentMessageIndex = 0;

// const textLoad = () => {
//     text.textContent = messages[currentMessageIndex];
//     currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Passer au message suivant
// };

const text = document.querySelector(".bvn");
const messages = ["Boujou !", "Welcome !", "Bienvenue !"];
let currentMessageIndex = 0;
let charIndex = 0; // Pour écrire lettre par lettre
const typingSpeed = 100; // Vitesse d'écriture (en ms)
const delayBetweenMessages = 4000; // Délai avant le prochain message (en ms)

// Fonction pour écrire un message lettre par lettre
const typeWriter = () => {
  const currentMessage = messages[currentMessageIndex];

  if (charIndex < currentMessage.length) {
    text.textContent += currentMessage.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed); // Continue d'écrire lettre par lettre
  } else {
    // Une fois le message terminé, attendre avant d'effacer
    setTimeout(() => {
      eraseWriter();
    }, delayBetweenMessages);
  }
};

// Effacement du message lettre par lettre
const eraseWriter = () => {
  if (charIndex > 0) {
    text.textContent = text.textContent.slice(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWriter, typingSpeed); // Continue d'effacer lettre par lettre
  } else {
    // Une fois effacé, passer au message suivant
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Passer au message suivant
    typeWriter(); // Redémarrer l'écriture
  }
};




// Bascule Mode (clair/sombre)
const toggleButton = document.querySelector("#toggle-theme");
const linkedinIcon = document.querySelector("#linkedin-icon");
const mailIcon = document.querySelector("#mail-icon");
const githubIcon = document.querySelector("#github-icon");
const githubSkill = document.querySelector("#logo-github")

// Fonction pour changer les icônes selon le thème
function updateIcons(theme) {
    if (theme === "dark") {
        linkedinIcon.src = "/src/img/logo-linkedin-blanc.svg";
        mailIcon.src = "/src/img/logo-mail-blanc.svg";
        githubIcon.src = "/src/img/logo-github-blanc.svg";
        githubSkill.src = "/src/img/logo-github-blanc.svg";
    } else {
        linkedinIcon.src = "/src/img/logo-linkedin.svg";
        mailIcon.src = "/src/img/img_mail.png";
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
