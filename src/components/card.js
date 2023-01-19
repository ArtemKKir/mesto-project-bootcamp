import { template, elements, imagePopup, imagePopupImage, imagePopupCaption } from "../utils/constants.js";
import { initialCards } from "./data.js";
/*const template = document.querySelector('#element-template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_picture');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');*/

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

const renderCard = (data) => {
    elements.prepend(createCard(data));
};

for (let i = initialCards.length - 1; i >= 0; i--) {
    renderCard(initialCards[i]);
}

export {renderCard}