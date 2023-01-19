import './pages/index.css';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup } from './utils/utils.js';
import { renderCard } from './components/card.js';
import {openPopupButtonElement, closePopupButton, add, placeForm, closePlacePopup, body, createPlaceButton,newPlaceUrl, newPlaceName, form, nameInput, jobInput, nameField, jobField} from './utils/constants.js'


add.addEventListener('click', function () {
    placeForm.classList.add('popup_opened');
})

closePlacePopup.addEventListener('click', function () {
    closePopup();
    createPlaceButton.reset();
})

createPlaceButton.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    renderCard({ name, link });
    event.target.reset();
    placeForm.classList.remove('popup_opened');
});

openPopupButtonElement.addEventListener('click', function () {
    openPopup();
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
});

closePopupButton.addEventListener('click', function () {
    closePopup();
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;
    closePopup();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
}

form.addEventListener('submit', handleFormSubmit);

body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
})

body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup();
    }
})

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_disabled',
    inputErrorClass: 'form__item_error',
    errorClass: 'form__error'
});