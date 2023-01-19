import { popup, placeForm, createPlaceButton } from "./constants.js";
export function openPopup() {
    popup.classList.add("popup_opened");
}

export function closePopup() {
    popup.classList.remove("popup_opened");
    placeForm.classList.remove("popup_opened");
    document.querySelector('.popup_picture').classList.remove('popup_opened');
    createPlaceButton.reset();
}