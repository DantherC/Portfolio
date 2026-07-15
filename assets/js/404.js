"use strict";

const errorImage = document.querySelector("[data-error-image]");
const errorTitle = document.querySelector("[data-error-title]");
const errorMessage = document.querySelector("[data-error-message]");

const scenes = [
  {
    title: "Error 404",
    message: "Un Gibberish se comió el documento.",
    image: "/assets/images/404/gibberish-libro.png",
    alt: "Un Gibberish comiendo un libro."
  },
  {
    title: "Error 404",
    message: "Los Gibberish reordenaron la biblioteca.",
    image: "/assets/images/404/gibberish-biblioteca.png",
    alt: "Varios Gibberish reorganizando libros en una biblioteca."
  },
  {
    title: "Error 404",
    message: "El documento está siendo parte de un teatro Gibberish en este momento.",
    image: "/assets/images/404/gibberish-teatro.png",
    alt: "Gibberish representando una obra de teatro con libros y papeles."
  }
];

const randomIndex = Math.floor(Math.random() * scenes.length);
const selectedScene = scenes[randomIndex];

if (errorImage && errorTitle && errorMessage) {
  errorImage.src = selectedScene.image;
  errorImage.alt = selectedScene.alt;
  errorTitle.textContent = selectedScene.title;
  errorMessage.textContent = selectedScene.message;
}