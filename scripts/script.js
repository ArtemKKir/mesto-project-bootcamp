import {enableValidation} from './validate.js';
const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.profile-popup');
const openPopupButtonElement = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close-btn');
const template = document.querySelector('#element-template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const add = document.querySelector('.profile__add-btn');
const placeForm = document.querySelector('.popup_place');
const closePlacePopup = document.querySelector('.popup_place__close-btn');
const body = document.querySelector('.body');

const createPlaceButton = placeForm.querySelector('.form_place');
const newPlaceName = placeForm.querySelector('.input-place');
const newPlaceUrl = placeForm.querySelector('.input-url');

const imagePopup = document.querySelector('.popup_picture');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

const form = document.querySelector('.form');
const nameInput = form.querySelector('.name-input');
const jobInput = form.querySelector('.job-input');
const nameField = document.querySelector('.profile__title');
const jobField = document.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.add("popup_opened");
}

function closePopup() {
    popup.classList.remove("popup_opened");
    placeForm.classList.remove("popup_opened");
    document.querySelector('.popup_picture').classList.remove('popup_opened');
}

add.addEventListener('click', function () {
    placeForm.classList.add('popup_opened');
})

closePlacePopup.addEventListener('click', function () {
    closePopup();
    createPlaceButton.reset();
})

const createCard = (data) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__name').textContent = data.name;
    card.querySelector('.element__dlt-btn').addEventListener('click', handleDeleteCard);
    card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-btn_active');
    });
    const image = card.querySelector('.element__image');
    const closePicturePopupButton = document.querySelector('.popup_picture__close-btn');
    image.src = data.link;
    image.alt = `Изображение ${data.name}`;
    image.addEventListener('click', () => {
        imagePopupImage.src = data.link;
        imagePopupImage.alt = `Изображение ${data.name}`;
        imagePopupCaption.textContent = data.name;
        document.querySelector('.popup_picture').classList.add('popup_opened');
    });
    closePicturePopupButton.addEventListener('click', function () {
        document.querySelector('.popup_picture').classList.remove('popup_opened');
    });

    console.log(card);

    return card;
}

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
}

createPlaceButton.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = newPlaceName.value;
    const link = newPlaceUrl.value;
    renderCard({ name, link });
    event.target.reset();
    placeForm.classList.remove('popup_opened');
});

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}


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

body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
})

body.addEventListener('click', function(evt) {
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