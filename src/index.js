import './pages/index.css';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup } from './utils/utils.js';
import { renderCard } from './components/card.js';
import { buttonLoading, avePopup, aveFormInput, aveImage, avePopupClose, aveForm, buttonOpenAvePopup, openPopupButtonElement, buttonClosePopupImage, closePopupButton, placePopupOpen, placeForm, placePopupClose, body, cardForm,newPlaceUrl, newPlaceName, form, nameInput, jobInput, name, job, profilePopup, imagePopup } from './utils/constants.js'
import { getInitialCards, getUser, newCard, getResponse, editUser, avatarChange } from './components/api.js';
import { initialCards } from './components/data.js';

getUser();

const renderProfile = () => {

}

function renderLoading(isLoading) {
    if(isLoading) {
        buttonLoading.textContent = 'Сохранение...';
        // error.textContent = '';
    } else {
        buttonLoading.textContent = 'Сохранить...';
    }
}
buttonOpenAvePopup.addEventListener('click', function() {
    openPopup(avePopup);
    aveForm.reset();
})

avePopupClose.addEventListener('click', function() {
    closePopup(avePopup);
})

export const avaChange = (evt) => {
    // evt.preventDefault();
    aveImage.src = aveFormInput.value;
    closePopup(avePopup);
}

aveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    avatarChange();
});

placePopupOpen.addEventListener('click', function () {
    openPopup(placeForm);
    cardForm.reset();
})

placePopupClose.addEventListener('click', function () {
    closePopup(placeForm);
})

buttonClosePopupImage.addEventListener('click', function () {
    closePopup(imagePopup);
});

cardForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    newCard({ name, link });
    closePopup(placeForm);
});

openPopupButtonElement.addEventListener('click', function () {
    openPopup(profilePopup);
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
});

closePopupButton.addEventListener('click', function () {
    closePopup(profilePopup);
});

export const handleFormSubmit = () => {
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(profilePopup);
}

/*function handleFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(profilePopup);
}*/

form.addEventListener('submit', function(e) {
    e.preventDefault;
    editUser();
});

function esc(evt) {
    if (evt.keyCode === 27) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(document.querySelector('.popup_opened'));
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