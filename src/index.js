import './pages/index.css';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup } from './utils/utils.js';
import { renderCard } from './components/card.js';
import { openPopupButtonElement, closePopupButton, openPlacePopup, placeForm, closePlacePopup, body, cardForm,newPlaceUrl, newPlaceName, form, nameInput, jobInput, nameField, jobField, profilePopup, imagePopup } from './utils/constants.js'


openPlacePopup.addEventListener('click', function () {
    openPopup(placeForm);
})

closePlacePopup.addEventListener('click', function () {
    closePopup(placeForm);
    cardForm.reset(placeForm);
})

cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    renderCard({ name, link });
    closePopup(placeForm);
    event.target.reset();
});

openPopupButtonElement.addEventListener('click', function () {
    openPopup(profilePopup);
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
});

closePopupButton.addEventListener('click', function () {
    closePopup(profilePopup);
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
    closePopup(profilePopup);
}

form.addEventListener('submit', handleFormSubmit);

function esc(evt) {
    if (evt.keyCode === 27) {
        closePopup(placeForm);
        closePopup(profilePopup);
        closePopup(imagePopup);
        cardForm.reset();
    }
}

// body.addEventListener('keydown', esc);

/*body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
})*/

body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(placeForm);
        closePopup(profilePopup);
        closePopup(imagePopup);
        cardForm.reset();
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

export {esc}