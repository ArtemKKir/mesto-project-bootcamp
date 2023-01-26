import { popup, body, buttonLoading, buttonLoadingProfile, buttonLoadingCard } from "./constants.js";


export function openPopup(popup) {
  popup.classList.add("popup_opened");
  body.addEventListener('keydown', esc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  body.removeEventListener('keydown', esc);
}

function esc(evt) {
  if (evt.key === "Escape") {
      closePopup(document.querySelector('.popup_opened'));
  }
}




//смена текста кнопки в попапах на 'Сохранение...' пока идет загрузка

export function renderLoading(isLoading) {
  if (isLoading) {
    buttonLoading.textContent = 'Сохранение...';
    } else {
    buttonLoading.textContent = 'Сохранить';
  }
}

export function renderLoadingProfile(isLoading) {
  if (isLoading) {
    buttonLoadingProfile.textContent = 'Сохранение...';
    } else {
    buttonLoadingProfile.textContent = 'Сохранить';
  }
}

export function renderLoadingCard(isLoading) {
  if (isLoading) {
    buttonLoadingCard.textContent = 'Сохранение...';
    } else {
    buttonLoadingCard.textContent = 'Создать';
  }
}