import { popup, body } from "./constants.js";
import { esc } from "../index.js";

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    body.addEventListener('keydown', esc);
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    // placeForm.classList.remove("popup_opened");
    // document.querySelector('.popup_picture').classList.remove('popup_opened');
    body.removeEventListener('keydown', esc);
}
