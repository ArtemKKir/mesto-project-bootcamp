import { popup, body } from "./constants.js";
import { esc } from "../index.js";
import { buttonLoading } from "./constants.js";
import { deleteCard } from "../components/api.js";

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    body.addEventListener('keydown', esc);
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    body.removeEventListener('keydown', esc);
}

export const handleDeleteCard = (event) => {
  event.target.closest('.element').deleteCard();
}

export function renderLoading(isLoading) {
  if(isLoading) {
      buttonLoading.textContent = 'Сохранение...';
      // error.textContent = '';
  } else {
      buttonLoading.textContent = 'Сохранить...';
  }
}


/*
function loadImage(imageUrl) {
    // создаём элемент изображения
    const img = document.createElement('img');
    img.src = imageUrl; // указываем путь к картинке
  
    return img;
  }
  
  // Теперь можно вставить картинку в разметку
  const img = loadImage('https://yastatic.net/q/logoaas/v1/Практикум.svg');
  
  document.body.append(img);

  --

  // колбэк, который нужно выполнить после того
// как изображение загрузится
function imageLoadCallback(evt) {
  // после загрузки добавим элемент изображения в DOM
  document.body.append(evt.target);
}

// Функция для создания изображения
function loadImage(imageUrl, loadCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;

  // Функция, которая записана в onload
  // будет вызвана после загрузки изображения
  img.onload = loadCallback;
}

// Теперь картинка появится в разметке только после загрузки
loadImage(
  'https://yastatic.net/q/logoaas/v1/Практикум.svg',
  imageLoadCallback
);
*/